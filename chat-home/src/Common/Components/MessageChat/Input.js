import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <i className="far fa-smile"></i>
                <p className="type-message">Type a message</p>
                <i className="icon-micro fas fa-microphone"></i>
                <i className="icon-attach fas fa-paperclip"></i>
                </div>
            </div>
        );
    }
}

export default Input; 