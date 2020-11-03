import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import './App.css'
//import AddSubscriber from './AddSubscriber';
import {Link} from 'react-router-dom';

function App() {
  let userInfo = [
    { id: 1, name: "Rusty Russell", number: 123456789 },
    { id: 2, name: "Ingo Molnar", number: 234234231 },
    { id: 3, name: "Luke Taylor", number: 976976123 },
    { id: 4, name: "Dave Gamacho", number: 23231231 }
  ];

  
  return (
    <div className="main-container">
      <Header heading="Phone Directory" />
      <Link to='/add'><button className="add-user">Add</button></Link>
      <div className="grid-container">
        <div className="grid-item"><b>Name</b></div>
        <div className="grid-item"><b>Phone</b></div>
        <div className="grid-item>"></div>
      </div>
      {
        userInfo.map(user => {
          return <div key={user.id} className="grid-container">
            <div className="grid-item">{user.name}</div>
            <div className="grid-item">{user.number}</div>
            <div className="grid-item"><button className="del-user">Delete</button></div>
          </div>
        })}
    </div>
  );
}


/*function App() {
  return (
      <div>
        <label htmlFor="username">Username: </label> <br />
        <input id="username" type="text" /><br /><br />
        <label htmlFor="password">Password: </label><br />
        <input id="password" type="password" /><br /><br />
      </div>
  );
}*/

export default App;
