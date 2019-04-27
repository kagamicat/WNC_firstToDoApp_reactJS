import React, { Component } from "react";
import "./ToDoItems.scss";
import propTypes from "prop-types";

class ToDoItems extends Component {
  static propTypes = {
    items: propTypes.array
  };
  renderItem = item => {
    return <li key={item.key}>{item.text}</li>;
  };

  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default ToDoItems;
