import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="content">
        <div className="title d-flex align-items-center col-12">
          <i className="fas fa-align-left"></i>
          <span className="flex-grow-1">{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Header;