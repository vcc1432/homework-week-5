import React, { Component } from 'react';
import './App.css';
import PizzaFormContainer from './components/PizzaFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pizza Configurator!</h1>
        <PizzaFormContainer />
      </div>
    );
  }
}

export default App;
