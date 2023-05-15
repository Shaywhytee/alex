from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exc
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import os


app = Flask(__name__)
CORS(app)

basedir =  os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')

db = SQLAlchemy(app)
ma = Marshmallow(app)
bc = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True)

    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'password', 'email')

user_schema = UserSchema()
multi_user_schema = UserSchema(many=True)

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    video_name = db.Column(db.String(15), nullable=False, unique=True)
    video_description = db.Column(db.String, nullable=False)
    video_length = db.Column(db.Integer, nullable=False)
    video_size = db.Column(db.Integer, nullable=False)
    video_tags = db.Column(db.String, nullable=False)
    video_link = db.Column(db.String, nullable=False)

    def __init__(self, video_name, video_description, video_length, video_size, video_tags, video_link):
        self.video_name = video_name
        self.video_description = video_description
        self.video_length = video_length
        self.video_size = video_size
        self.video_tags = video_tags
        self.video_link = video_link


class VideoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'video_name', 'video_description', 'video_length', 'video_size', 'video_tags')

video_schema = VideoSchema()
multi_video_schema = VideoSchema(many=True)

@app.route("/user/create", methods=["POST"])
def create_user():
    if request.content_type != "application/json":
        return jsonify("Error: Please send in JSON", 400)
    
    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")
    email = post_data.get("email")

    pw_hash = bc.generate_password_hash(password, 19).decode('utf-8')
    
    new_user = User(username, pw_hash, email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify("User Created", user_schema.dump(new_user))

@app.route("/verify", methods=["POST"])
def verify():
    if request.content_type != "application/json":
        return jsonify("Error: Please send in JSON", 400)
    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")
    email = post_data.get("email")

    user = db.session.query(User).filter(
        (User.username == username) | (User.email == email)).first()

    
    if user is None:
        return jsonify("User information is required", 404)
    if not bc.check_password_hash(user.password, password):
        return jsonify("User information not verified", 404)
    
@app.route('/user/get')
def get_users():
    users = db.session.query(User).all()
    return jsonify(multi_user_schema.dump(users))

@app.route('/user/delete/<id>', methods=["DELETE"])
def delete_user(id):
    delete_user = db.session.query(User).filter(User.id == id).first()
    db.session.delete(delete_user)
    db.session.commit()
    return jsonify("User deleted")

@app.route('/user/update/<id>', methods=["PUT"])
def edit_user(id):
    if request.content_type != 'application/json':
        return jsonify("Error:", 400)
    put_data = request.get_json()
    username = put_data.get('username')
    email = put_data.get('email')
    
    edit_user = db.session.query(User).filter(User.id == id).first()

    if username != None:
        edit_user.username = username
    if email != None:
        edit_user.email = email

    db.session.commit()
    return jsonify("User Information Has Been Updated!")

@app.route('/.user/editpw/<id>', methods=["PUT"])
def edit_pw(id):
    if request.content_type != 'application/json':
        return jsonify("Error updating PW")
    password = request.get_json().get("password")
    user = db.session.query(User).filter(User.id == id).first()
    pw_hash = bc.generate_password_hash(password, 15).decode('utf-8')
    user.password = pw_hash

    db.session.commit()

    return jsonify("Password Changed Successfully=", user_schema.dump(user))

@app.route("/video/add", methods=["POST"])
def add_video():
    if request.content_type != "application/json":
        return jsonify("Error: Please send in JSON", 400)
    
    post_data = request.get_json()
    video_name = post_data.get("video_name")
    video_description = post_data.get("video_description")
    video_length = post_data.get("video_length")
    video_size = post_data.get("video_size")
    video_tags = post_data.get("video_tags")
    video_link = post_data.get("video_link")
    
    new_video = Video(video_name, video_description, video_length, video_size, video_tags, video_link)
    db.session.add(new_video)
    db.session.commit()

    return jsonify("Video Added", video_schema.dump(new_video))

@app.route('/video/all')
def get_videos():
    videos = db.session.query(Video).all()
    return jsonify(multi_video_schema.dump(videos))

@app.route('/video/<id>')
def get_video(id):
    video = db.session.query(Video).filter(Video.id == id).first()
    return jsonify(video_schema.dump(video))

@app.route('/video/delete/<id>', methods=["DELETE"])
def delete_video(id):
    delete_video = db.session.query(Video).filter(Video.id == id).first()
    db.session.delete(delete_video)
    db.session.commit()
    return jsonify("Video deleted")

@app.route('/video/update/<id>', methods=["PUT"])
def edit_video(id):
    if request.content_type != 'application/json':
        return jsonify("Error:", 400)
    put_data = request.get_json()
    video_name = put_data.get("video_name")
    video_description = put_data.get("video_description")
    video_length = put_data.get("video_length")
    video_size = put_data.get("video_size")
    video_tags = put_data.get("video_tags")
    video_link = put_data.get("video_link")
    
    edit_video = db.session.query(Video).filter(Video.id == id).first()

    if edit_video is None:
        return jsonify({"error": "Video not found"}), 404

    if video_name is not None:
        edit_video.video_name = video_name
    if video_description is not None:
        edit_video.video_description = video_description
    if video_length is not None:
        edit_video.video_length = video_length
    if video_size is not None:
        edit_video.video_size = video_size
    if video_tags is not None:
        edit_video.video_tags = video_tags
    if video_link is not None:
        edit_video.video_link = video_link

    db.session.commit()
    return jsonify({"message": "Video information has been updated"})


if __name__ == '__main__':
    app.run(debug=True)