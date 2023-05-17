import React, { Component } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import NavBar from "./helpers/nav_bar";
import Footer from "./helpers/footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>

      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}
