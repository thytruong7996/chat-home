import React, { Component } from 'react';
import './Friend.css';

class Friend extends Component{  
  render(){
    //online: 1; input: 2; busy: 3; not-online:4
    let {onlineStatus, messageCount} = this.props; 
    let onlineStatusDisplay;
    let onlineStatusEl;
    let messageCountEl;
    
    switch(onlineStatus){
      case 1:
        onlineStatusDisplay = { backgroundColor:"#33bf33" };
        break;
      case 2:
        onlineStatusDisplay = { backgroundColor:"#38429C" };
        break;
      case 3:
        onlineStatusDisplay = { backgroundColor:"red" };
        break;
      default:
        onlineStatusDisplay = null;
    }

    if(onlineStatusDisplay !== null)
      onlineStatusEl =  <div className="online-status" style={onlineStatusDisplay}></div>
    if(messageCount !== 0)
      messageCountEl = <p className="message-count">{messageCount}</p>
    return(      
      <div className="wapper d-flex align-items-center">
        <div className="friend-face">
          <img src={this.props.faceImageUrl} alt=""></img>
          {onlineStatusEl}
        </div>
        <div className="context d-flex flex-column justify-content-center flex-grow-1">
          <div className="top d-flex align-items-center">
            <div className="friend-name flex-grow-1">{this.props.name}</div>
            <div className="nearest-online">{this.props.nearestOnline}</div>
          </div>
          <div className="bottom d-flex align-items-center">
            <p className="status flex-grow-1">{this.props.status.slice(0, 30)}</p>
            {messageCountEl}            
          </div>
        </div>
      </div>
    )
  }
}

export default Friend;