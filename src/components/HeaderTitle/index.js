import React, { Component } from "react";

class HeaderTitle extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default HeaderTitle;
