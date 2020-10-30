import React from 'react';
import './Header.css';

//import { Component } from 'react';

//function components are stateless
const Header = function () {
    return (
        <div className="header">
            Phone Directory
        </div>
    );
}

/*
inline style demo
*
const Header = function () {
    return (
        <div className="header" style={{ textAlign: 'center', padding: 20, backgroundColor: 'black', color: 'white', textTransform: "uppercase" }}>
            Phone Directory
        </div>
    );
}*/


//class component example 
//class components are used when state needs to be maintained

/*class Header extends Component {
    render() {
        return (
            <div className="header">
                Phone Directory
            </div>
        );
    }
}*/

export default Header;