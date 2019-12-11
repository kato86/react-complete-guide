import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxiliary classes={classes.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

export default withClass(Person, classes.Person);
