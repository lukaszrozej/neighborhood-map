import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapComponent from './MapComponent.js';

import * as places from './places.json';

class App extends Component {
  state = {
    places: places
  }

  render() {
    return (
      <div className="App">
        <MapComponent isMarkerShown />
      </div>
    );
  }
}

export default App;
