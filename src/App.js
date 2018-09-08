import React, { Component } from 'react';
import './App.css';
import BaseFormContainer from './components/BaseFormContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pizza Configurator!</h1>
        <BaseFormContainer />
      </div>
    );
  }
}

export default App;
