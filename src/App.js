import React, { Component } from 'react';
import './App.css';
import BaseFormContainer from './components/BaseFormContainer';
import Total from './components/Total';
import Homepage from './components/Homepage'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Homepage />
        <BaseFormContainer />
        <Total />
      </div>
    );
  }
}



export default App;
