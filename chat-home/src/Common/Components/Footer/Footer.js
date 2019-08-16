import React, { Component } from 'react';
import Email from './Email';
import Call from './Call';
import Book from './Book';
import Message from './Message';
import AddButton from './AddButton';


class Footer extends Component{
  render(){
 
    return (
         
      <div className="footer col-12 d-flex align-items-center">
        <div className="left d-flex align-items-center justify-content-start">
          <Email></Email>
          <Call></Call>
        </div>
        <AddButton></AddButton>
        <div className="right d-flex align-items-center justify-content-end">
          <Book></Book>
          <Message></Message>
        </div>
      </div>
    )
  }
}

export default Footer;