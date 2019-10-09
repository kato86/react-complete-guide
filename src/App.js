import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Kamil", age: 33 }, { name: "Ania", age: 35 }],
    showPersons: false
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

  togglePersonsHandler = () => {
    const oldState = this.state.showPersons;
    this.setState({ showPersons: !oldState });
  };

  render() {
    const style = {
      backgroundColor: "red",
      fontSize: "18px",
      border: "2px solid lightblue",
      padding: "10px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? (
          <div>
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
        ) : null}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m a React App!!!'));
  }
}

export default App;
