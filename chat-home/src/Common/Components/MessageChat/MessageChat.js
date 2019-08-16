import React, { Component } from 'react';
import ChatR from './ChatR'
import ChatS from './ChatS';
import Input from './Input';


class MessageChat extends Component {
    render() {
        return (
            <div>
                <ChatR/>
                <ChatS/>
                <Input/>
            </div>
            

                 
        )
    };
}
export default MessageChat;