import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneDirectory from './PhoneDirectory';
import reportWebVitals from './reportWebVitals';

//const input = React.createElement("input",{type:"text",placeholder:"please type name"});

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory/>
  </React.StrictMode>,
  document.getElementsByName('root')[0]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
