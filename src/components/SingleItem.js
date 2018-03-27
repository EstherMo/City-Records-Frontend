import React, { Component } from 'react';

class SingleItem extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                <h4> {this.props.title}</h4>
                <p> Agency: {this.props.agency}</p>
                <p> State: {this.props.state}</p>
                <p> Address: {this.props.address}</p>
                <p> Document Link: {this.props.document}</p>
                <p> Category: {this.props.category}</p>
            </div>
         )
    }
}
 
export default SingleItem;