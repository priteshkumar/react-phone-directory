import React, { Component } from 'react';
import Header from './Header';
import './App.css'


class AddSubscriber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            phNumber: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const id = target.id;
        const value = target.value;
        //console.log(id + value);
        this.setState({ [id]: value });
    }

    render() {
        return (
            <div className="main-container">
                <Header heading="Add Subscriber" />
                <button className="add-user back-btn">BACK</button>
                <div className="form-container">
                    <form>
                        <label htmlFor="name">Name:  </label>
                        <input type="text" id="userName" placeholder="Enter your name" onChange={this.handleInputChange}/><br /><br />
                        <label htmlFor="phnumber">Phone: </label>
                        <input type="tel" id="phNumber" placeholder="Enter your phone number" onChange={this.handleInputChange}/>
                    </form>
                </div>
                <div className="subscribe-info">
                    <p className="subscribe-header">Subscriber to be added:</p>
                    <span>Name: {this.state.userName}</span><br />
                    <span>Phone: {this.state.phNumber}</span>
                </div>
                <button className="add-user">ADD</button>
            </div>
        );
    }
}

export default AddSubscriber;