import React, { Component } from "react";
import "./ToDo.scss";

import ToDoItems from "../ToDoItems";
// "../ geht einen Ordner raus
// "./" ein Ordner rein

class ToDoList extends Component {
  constructor(props) {
    super(props);
    // mit super ruft man den Constructor von der Component auf die extended wird
    this.state = {
      items: []
      //items ist ein name und das array entsteht hier
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();

    if (this.inputElement.value !== "") {
      const newItem = {
        text: this.inputElement.value,
        // "," weils ein Objekt ist
        key: Date.now()
      };

      this.setState(prevState => {
        // "=> {}" is the new way of writing functions
        return {
          items: prevState.items.concat(newItem)
        };
      });
      console.log(this.state);
    }
  }

  removeItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            ref={el => {
              this.inputElement = el;
            }}
          />
          <button type="submit">add</button>
        </form>
        <ToDoItems items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default ToDoList;
