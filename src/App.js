import React, { Component } from 'react';
import './App.css';
import BaseFormContainer from './components/BaseFormContainer';
import ToppingsContainer from './components/ToppingsContainer';
import Total from './components/Total';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pizza Configurator!</h1>
        <BaseFormContainer />
        <ToppingsContainer />
        <Total />
      </div>
    );
  }
}



export default App;
