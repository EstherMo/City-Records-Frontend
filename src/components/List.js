import React, { Component } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class List extends Component {
  constructor() {
    super();
    this.state = {
      itemDetails: []
    };
  }
  getList = () => {
    axios
      .get(
        `https://data.cityofnewyork.us/resource/buex-bi6w.json?type_of_notice_description=${this.props.type}&$limit=10`
      )
      .then(response => {this.setState({ itemDetails: response.data });
    });
  };

  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div className="text list">
        <h1> {this.props.type} list </h1>
        {this.state.itemDetails.map((item, index) => {
          return (
            <Link key={index} to={{
                pathname: `/item/${index + 1}`,
                state: { 
                  title: `${item.short_title}`,
                  category: `${item.section_name}`,
                  agency: `${item.agency_name}`,
                  document:`${item.document_links}`,
                  date: `${item.start_date}`
            }
            }}> 
            <br/> <br/> {item.short_title}</Link>
          );

        })}
        <br/><br/> <Link to="/">Home</Link>
        <p />
      </div>
    );
  }
}

export default List;
