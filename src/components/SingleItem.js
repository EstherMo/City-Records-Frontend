import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class SingleItem extends Component {
    state = {}
    saveRecord = () => {
        axios
          .post(`http://localhost:8080/records`, { urlLink: `${this.props.location.state.document}`, category: `${this.props.location.state.category}` }).then(response => {
            console.log('saved successfully')
        });
      };
    render() { 
        console.log("location state",this.props)
        return ( 
            <div className="single_item">
                <h4> Title: {this.props.location.state.title}</h4>
                <p> <b>Agency:</b> {this.props.location.state.agency}</p>
                <p> <b>Document Link: </b> 
                <a href={this.props.location.state.document}>{this.props.location.state.document}</a> 
                </p>
                <p> <b>Date:</b> {this.props.location.state.date}</p>
                <p> <b>Category:</b> {this.props.location.state.category}</p>
                <button onClick={this.saveRecord()}> Save Record </button>
                <Link to="/">    Home</Link>
            </div>
         )
    }
}
 
export default SingleItem;