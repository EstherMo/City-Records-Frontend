import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import SingleItem from "./SingleItem";

// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

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
        `https://data.cityofnewyork.us/resource/buex-bi6w.json?type_of_notice_description=${
          this.props.type
        }&$limit=10`
      )
      .then(response => {
        this.setState({ itemDetails: response.data });
        //console.log("items on list",this.state.itemDetails);
      });
  };

  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div>
        <h1> {this.props.type} list</h1>
        <Link to="/">Home</Link>
        {this.state.itemDetails.map((item, index) => {
          console.log("item", item);
          <Link to="/">item.short_title</Link>;
          return (
            <SingleItem
              key={index}
              title={item.short_title}
              agency={item.agency_name}
              state={item.state}
              address={item.street_address_1}
              document={item.document_links}
              category={item.category_description}
            />
          );
        })}
        <p />
      </div>
    );
  }
}

export default List;
