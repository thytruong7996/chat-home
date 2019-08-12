import React, { Component } from 'react';


class AddButton extends Component {
    render() {
        return (
            <div className="middle flex-grow-1 d-flex justify-content-center">
            <div className="add-button d-flex justify-content-center">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        );
    }
}
export default AddButton;