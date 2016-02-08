import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <div className="page-container">
        <div className="view-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
