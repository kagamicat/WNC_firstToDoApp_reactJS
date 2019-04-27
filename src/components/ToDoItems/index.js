import React, { Component } from "react";
import "./ToDoItems.scss";
import PropTypes from "prop-types";

class ToDoItems extends Component {
  static PropTypes = {
    items: PropTypes.array,
    removeItem: PropTypes.func
  };

  renderItem = item => {
    return (
      <li key={item.key} onClick={() => this.props.removeItem(item.key)}>
        {item.text}
      </li>
    );
  };

  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default ToDoItems;
