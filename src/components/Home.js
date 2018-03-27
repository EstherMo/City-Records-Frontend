import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">NYC City Records</h1>
        </header>
        <div className="menu">
          <Link to="/meetings">Public Meetings </Link>
          <Link to="/awards">Awards </Link>
          <Link to="/notices">Court Notices </Link>
        </div>
      </div>
    );
  }
}

export default Home;
