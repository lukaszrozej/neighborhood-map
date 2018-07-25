import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapComponent from './MapComponent.js';

import * as places from './places.json';

class App extends Component {
  state = {
    places: places,
    query: '',
    filteredPlaces: places,
    selectedPlace: ''
  }

  fetchImage(placeID) {
    const FOURSQUARE_URL = 'https://api.foursquare.com/v2/venues/';
    const CLIENT_ID = 'M3ZKOWBL0OC0FPH0ESYUOFVHZGIJT0AQLPROVZNSWTPA1P4V';
    const CLIENT_SECRET = 'GJUD4FVH0SAS0SN1ICISKE4TNKYHK4OIRT043NLOUJ1035CS';
    const VERSION = '20180725';

    return fetch(`${FOURSQUARE_URL}`
            + `${placeID}`
            + `?client_id=${CLIENT_ID}`
            + `&client_secret=${CLIENT_SECRET}`
            + `&v=${VERSION}`
          )
        .then(response => response.json())
        .then(data => `${data.response.venue.bestPhoto.prefix}200x200${data.response.venue.bestPhoto.suffix}`);
  }

  openInfoWindow = place => () => {
    this.fetchImage(place.id)
    this.setState({
      selectedPlace: place.name
    })
  }

  closeInfoWindow = () => {
    this.setState({
      selectedPlace: ''
    })
  }

  render() {
    return (
      <div className="App">
        <MapComponent
          places={this.state.filteredPlaces}
          selectedPlace={this.state.selectedPlace}
          openInfoWindow={this.openInfoWindow}
          closeInfoWindow={this.closeInfoWindow}
        />
      </div>
    );
  }
}

export default App;
