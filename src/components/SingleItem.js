import React, { Component } from 'react';

class SingleItem extends Component {
    state = {}
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
                <button onClick={"hello"}> Save Record </button>
            </div>
         )
    }
}
 
export default SingleItem;