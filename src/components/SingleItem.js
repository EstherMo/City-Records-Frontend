import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            category: ''
          };
    
        this.handleChangeLink= this.handleChangeLink.bind(this);
        this.handleChangeCategory= this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    saveRecord = () => {
        axios
          .post(`${process.env.REACT_APP_HOST}/records`, { urlLink: `${this.props.location.state.document}`, category: `${this.props.location.state.category}` }).then(response => {
            console.log('saved successfully')
        }).catch(function (error) {
            console.log(error);
          });
    };
    editRecord = () => {
        axios
          .post(`${process.env.REACT_APP_HOST}/records`,{ urlLink: `${this.state.link}`, category: `${this.state.category}` }).then(response => {
            console.log('edited successfully')
        }).catch(function (error) {
            console.log(error);
          });
    }; 
    handleChangeLink(event) {
        this.setState({link: event.target.link});
    }

    handleChangeCategory(event) {
        this.setState({category: event.target.category});
      }
    
    handleSubmit(event) {
        console.log('this link was sumbitted: ' + this.state.link + 'this category was submitted ' + this.state.category);
        event.preventDefault();
        this.editRecord();
    }   
    render() { 
        console.log("location state",this.props)
        return ( 
            <div className="single_item">
                <h2> {this.props.location.state.title}</h2>
                <p> <b>Agency:</b> {this.props.location.state.agency}</p>
                <p> <b>Document Link: </b> 
                <a href={this.props.location.state.document}>{this.props.location.state.document}</a> 
                </p>
                <p> <b>Date:</b> {this.props.location.state.date}</p>
                <p> <b>Category:</b> {this.props.location.state.category}</p>
                <button onClick={this.saveRecord()}> Save Record </button> <br/> <br/>
                <form  onSubmit={this.handleSubmit}>
                    Document Link: <br/>
                    <input type="text" name="link" value={this.state.link} onChange={this.handleChangeLink}/><br/> <br/>
                    Category:<br/>
                    <input type="text" name="category" value={this.state.category} onChange={this.handleChangeCategory}/> <br/> <br/>
                    <input type="submit" value="Edit Record"/>
                    </form>
                <Link to="/">    Home</Link>
            </div>
         )
    }
}
 
export default SingleItem;