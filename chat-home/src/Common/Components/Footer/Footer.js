import React, { Component } from 'react';
import './Footer.css';
import Email from '../Email-Footer/Email';
import Call from '../Call-Footer/Call';
import Book from '../Book-Footer/Book';
import Message from '../Message-Footer/Message';
import AddButton from '../Add-Button-Footer/AddButton';

class Footer extends Component{
  render(){
    return (
      <div className="footer col-12 d-flex align-items-center my-auto">
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