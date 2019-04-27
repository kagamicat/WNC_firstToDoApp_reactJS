import React, { Component } from "react";
import "./Heading.scss";
import propTypes from "prop-types";

class Heading extends Component {
  static propTypes = {
    //static is used within a class
    text: propTypes.string
    //the code validates the input as string - otherwise warning!
  };

  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default Heading;
