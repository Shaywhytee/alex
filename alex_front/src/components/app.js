import React, { Component } from "react";
import Home from "./pages/home";
import NavBar from "./helpers/nav_bar";
import Footer from "./helpers/footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}
