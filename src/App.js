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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m a React App!!!'));
  }
}

export default App;
