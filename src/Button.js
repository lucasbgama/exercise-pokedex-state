import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onClick}
          disabled={this.props.disabled}
          className={this.props.className}
          autoFocus={this.props.autoFocus}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
