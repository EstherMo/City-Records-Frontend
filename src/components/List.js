import React, { Component } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

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
            <Link key={item.request_id} to={{
                pathname: `/item/${item.request_id}`,
                state: { 
                  title: `${item.short_title}`,
                  category: `${item.section_name}`,
                  agency: `${item.agency_name}`,
                  document:`${item.document_links}`,
                  date: `${item.start_date}`,
                  id: `${item.request_id}`
            }
            }}> 
            <br/> <ul> <li>{item.short_title}</li></ul> </Link>
          );

        })}
        <br/><br/> <Link to="/">Home</Link>
        <p />
      </div>
    );
  }
}

export default List;
