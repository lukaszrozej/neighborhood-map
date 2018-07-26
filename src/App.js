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

  fetchImage(place) {
    const FOURSQUARE_URL = 'https://api.foursquare.com/v2/venues/';
    const CLIENT_ID = 'M3ZKOWBL0OC0FPH0ESYUOFVHZGIJT0AQLPROVZNSWTPA1P4V';
    const CLIENT_SECRET = 'GJUD4FVH0SAS0SN1ICISKE4TNKYHK4OIRT043NLOUJ1035CS';
    const VERSION = '20180725';

    fetch(`${FOURSQUARE_URL}`
            + `${place.id}`
            + `?client_id=${CLIENT_ID}`
            + `&client_secret=${CLIENT_SECRET}`
            + `&v=${VERSION}`
          )
      .then(response => response.json())
      .then(data => {
        const prefix = data.response.venue.bestPhoto.prefix;
        const suffix = data.response.venue.bestPhoto.suffix;
        const photoURL = `${prefix}200x200${suffix}`;

        console.log(photoURL);

        const newPlaces = places.map(oldPlace => 
          oldPlace.id === place.id
            ? Object.assign({}, place, { photo: photoURL })
            : oldPlace
        )
        
        this.setState({
          places: newPlaces,
        })
      })
      .catch(() => {
        const newPlaces = places.map(oldPlace =>
          oldPlace.id === place.id
            ? Object.assign({}, place, { photo: 'error' })
            : oldPlace
        )

        this.setState({
          places: newPlaces,
        })

      });
  }

  selectPlace = place => () => {
    if (!place.photo) {
      this.fetchImage(place)
    }
    this.setState({
      selectedPlace: place.name
    })
  }

  cancelSelection = () => {
    this.setState({
      selectedPlace: ''
    })
  }

  render() {
    console.log(this.state.places)
    return (
      <div className="App">
        <MapComponent
          places={this.state.places}
          selectedPlace={this.state.selectedPlace}
          selectPlace={this.selectPlace}
          cancelSelection={this.cancelSelection}
        />
      </div>
    );
  }
}

export default App;
