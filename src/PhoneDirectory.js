import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AddSubscriber from './AddSubscriber';

class PhoneDirectory extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' render={(props) => <App />} />
                <Route exact path='/add' render={({history},props) => <AddSubscriber history={history}/>} />
            </Router>
        );
    }
}

export default PhoneDirectory;