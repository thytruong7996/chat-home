import React, { Component } from 'react';
import Friend from '../Friend/Friend';
import data from '../data.json';

class FriendList extends Component {
  render(){
    return(
      data.map((value,key) => {
        return (
          
          <Friend key = {key}
            id = {value.id}
            onlineStatus = {value.onlineStatus}
            name = {value.name}
            status = {value.status}
            nearestOnline = {value.nearestOnline}
            messageCount = {value.messageCount}
            faceImageUrl = {value.faceImageUrl}>
          </Friend>
        )
      })

    );
  }
}
export default FriendList;