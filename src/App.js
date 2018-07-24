import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapComponent from './MapComponent.js';

import * as places from './places.json';

class App extends Component {
  state = {
    places: places,
    selectedPlace: 'Park Promenada'
  }

  render() {
    return (
      <div className="App">
        <MapComponent
          places={this.state.places}
          selectedPlace={this.state.selectedPlace}
        />
      </div>
    );
  }
}

export default App;
