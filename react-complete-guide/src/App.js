import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p1>This is realy working</p1>
        <button>Switch Name</button>
        <Person name = "Karim">my hobbies: Reading</Person>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
