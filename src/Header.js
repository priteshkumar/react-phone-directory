import React from 'react';
//import { Component } from 'react';

//function components are stateless
const Header = function () {
    return (
        <div className="header">
            Phone Directory
        </div>
    );
}

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