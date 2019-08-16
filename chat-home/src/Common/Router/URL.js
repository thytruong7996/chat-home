import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FriendList from '../Components/Friend_List/FriendList';
import MessageChat from '../Components/MessageChat/MessageChat';

class URL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route  exact path="/" component={FriendList}/>
                    <Route  path="/detail/" component={MessageChat}/>
                </div>
            </Router>
        );
    }
}

export default URL;