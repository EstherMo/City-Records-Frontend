import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            category: '',
            edit: false
          };
    
        this.handleChangeLink= this.handleChangeLink.bind(this);
        this.handleChangeCategory= this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    saveRecord = () => {
        axios
          .post(`${process.env.REACT_APP_HOST}/records`, { id: this.props.location.state.id, urlLink: this.props.location.state.document, category: this.props.location.state.category }).then(response => {
            console.log('saved successfully');
            alert("Saved! 👏🏻👏🏻 ");
        }).catch(function (error) {
            console.log(error);
          });
    };
    editRecord = () => {
        //console.log('this link was sumbitted: ' + this.state.link + 'this category was submitted ' + this.state.category);
        axios
          .patch(`${process.env.REACT_APP_HOST}/records/${this.props.location.state.id}`,{ urlLink: `${this.state.link}`, category: `${this.state.category}` }).then(response => {
            console.log('edited successfully');
            alert("Updated! 👏 👏🏻");
            //this.state.edit = false;
        }).catch(function (error) {
            console.log(error);
          });
    }; 
    handleChangeLink(event) {
        this.setState({link: event.target.value});
    }

    handleChangeCategory(event) {
        console.log("category",event.target.name); //refactor: only need one handlechange
        this.setState({category: event.target.value});
      }
    
    handleSubmit(event) {
        console.log('this link was sumbitted: ' + this.state.link + 'this category was submitted ' + this.state.category);
        event.preventDefault();
        this.editRecord();
    }   
    render() { 
        if(this.state.edit){
           var form =  <form  onSubmit={this.handleSubmit}>
                    Enter Updated Link: <br/>
                    <input type="text" name="link" value={this.state.link} onChange={this.handleChangeLink}/><br/> <br/>
                    Enter Updated Category:<br/>
                    <input type="text" name="category" value={this.state.category} onChange={this.handleChangeCategory}/> <br/> <br/>
                    <input type="submit" value="Update Record"/>
                </form>
        }
        return ( 
            <div className="single_item">
                <h2> {this.props.location.state.title}</h2>
                <p> <b>Agency:</b> {this.props.location.state.agency}</p>
                <p> <b>Document Link: </b> 
                <a href={this.props.location.state.document}>{this.props.location.state.document}</a> 
                </p>
                <p> <b>Date:</b> {this.props.location.state.date}</p>
                <p> <b>Category:</b> {this.props.location.state.category}</p>
            
                <button onClick={this.saveRecord}> Save Record </button> <br/> <br/>
                <button onClick={() => { this.setState({ edit: !this.state.edit })}} > Edit This </button> <br/> <br/>

                {form}
                <Link to="/">Home</Link>
            </div>
         )
    }
}
 
export default SingleItem;
