import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isHeaderOn:true};
    this.state = {icon:true}

    this.handleClick= this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isHeaderOn:!prevState.isHeaderOn
    }));
  }
  render() {
    return (
      
      <div className="content">
        <div  className="title d-flex align-items-center col-12" onClick={this.handleClick}>
          <a  href="/"><i className="fas fa-align-left" ></i></a>
          <span className="flex-grow-1">{this.props.title}
        </span>
        </div>
      </div>
    )
  }
}

export default Header;