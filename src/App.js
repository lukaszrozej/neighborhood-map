import React, { Component } from 'react';
import './App.css';

import FloatingButton from './FloatingButton.js';
import MapComponent from './MapComponent.js';
import LeftDrawer from './LeftDrawer.js';

import * as places from './places.json';

const NO_PLACE = { id: undefined };

class App extends Component {
  state = {
    places: places,
    query: '',
    filteredPlaces: places,
    selectedPlace: '',
    drawerOpen: false,
    animation: 0,
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
      .then(this.extractPhotoURL)
      .catch(() => 'error')
      .then(this.addPhotoInfoToPlace(place));
  }

  extractPhotoURL = data =>
    `${data.response.venue.bestPhoto.prefix}` +
    `200x200` +
    `${data.response.venue.bestPhoto.suffix}`;
  
  addPhotoInfoToPlace = place => info => {
    const newPlaces = this.state.places.map(oldPlace =>
      oldPlace.id === place.id
        ? Object.assign({}, place, { photo: info })
        : oldPlace
    )

    const regex = new RegExp(this.state.query, 'i');
    const newFilteredPlaces = newPlaces.filter(place => place.name.match(regex));

    this.setState({
      places: newPlaces,
      filteredPlaces: newFilteredPlaces
    })
  }

  selectPlace = place => () => {
    if (!place.photo) {
      this.fetchImage(place)
    }
    this.setState({
      selectedPlace: place,
      animation: 1,
    })
    setTimeout(this.cancellAnimation, 500);
  }

  cancelSelection = () => {
    this.setState({
      selectedPlace: NO_PLACE
    })
  }

  cancellAnimation = () => {
    this.setState({
      animation: 0
    })
  }

  inputChange = event => {
    const newQuery = event.target.value.trim();
    const regex = new RegExp(newQuery, 'i');
    const newFilteredPlaces = this.state.places.filter(place => place.name.match(regex));
    this.setState({
      query: newQuery,
      filteredPlaces: newFilteredPlaces,
      selectedPlace: NO_PLACE
    });
  }

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  render() {
    return (
      <div className="App" style={{display: 'flex'}}>
        {this.state.drawerOpen
          ? <LeftDrawer
              query={this.state.query}
              places={this.state.filteredPlaces}
              inputChange={this.inputChange}
              selectPlace={this.selectPlace}
              toggleDrawer={this.toggleDrawer}
              drawerOpen={this.state.drawerOpen}
            />
          : <FloatingButton
              toggleDrawer={this.toggleDrawer}
            />
        }
        <MapComponent
          places={this.state.filteredPlaces}
          selectedPlace={this.state.selectedPlace}
          selectPlace={this.selectPlace}
          cancelSelection={this.cancelSelection}
          animation={this.state.animation}
        />
      </div>
    );
  }
}

export default App;
