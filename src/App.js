import React, { Component } from 'react';
import './App.css';
import Adding from './Adding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TaskApp">
        <Adding />
        </div>
      </div>
    );
  }
}

export default App;
