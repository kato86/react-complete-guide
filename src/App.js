import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Kamil", age: 33 }, { name: "Ania", age: 35 }]
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    this.setState({
      persons: [{ name: "Kamil", age: 33 }, { name: "Ania", age: 30 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Kamil", age: 33 },
        { name: event.target.value, age: 35 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "kam")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Running
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Kamillo")}
          changed={this.nameChangedHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m a React App!!!'));
  }
}

export default App;
