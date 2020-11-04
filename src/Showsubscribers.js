import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import './App.css'
//import AddSubscriber from './AddSubscriber';
import { Link } from 'react-router-dom';

class Showsubscribers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberList: [
        { id: 1, name: "Rusty Russell", number: 123456789 },
        { id: 2, name: "Ingo Molnar", number: 234234231 },
        { id: 3, name: "Luke Taylor", number: 976976123 },
        { id: 4, name: "Dave Gamacho", number: 23231231 }
      ]
    }

    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleDeleteUser(e) {
    let target = e.target;
    let userId = target.getAttribute("data-id") * 1;//convert to integer
    let subscribers = this.state.subscriberList;
    subscribers = subscribers.filter((subscriber) => subscriber.id !== userId);
    this.setState({subscriberList:subscribers});
  }

  render() {
    return (
      <div className="main-container" >
        <Header heading="Phone Directory" />
        <Link to='/add'><button className="add-user">Add</button></Link>
        <div className="grid-container">
          <div className="grid-item"><b>Name</b></div>
          <div className="grid-item"><b>Phone</b></div>
          <div className="grid-item>"></div>
        </div>
        {
          this.state.subscriberList.map(user => {
            return <div key={user.id} className="grid-container">
              <div className="grid-item">{user.name}</div>
              <div className="grid-item">{user.number}</div>
              <div className="grid-item"><button className="del-user" data-id={user.id} onClick={this.handleDeleteUser}>Delete</button></div>
            </div>
          })}
      </div>
    );
  }
}

export default Showsubscribers;
