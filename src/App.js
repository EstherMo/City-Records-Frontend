import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import List from "./components/List";
import SingleItem from './components/SingleItem'

class App extends Component {
  render() {
    //set the props to pass to each itemlist
    const MeetingList = () => <List type={"Meeting"} />;
    const AwardsList = () => <List type={"Award"} />;
    const NoticesList = () => <List type={"Notice"} />;
    
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/meetings" render={MeetingList} />
            <Route exact path="/awards" render={AwardsList} />
            <Route exact path="/notices" render={NoticesList} />
            <Route name="item" path="/item/:itemId" component={SingleItem} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
