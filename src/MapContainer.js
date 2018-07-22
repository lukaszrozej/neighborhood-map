import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({google}) => (
  <Map
    google={google}
    zoom={14}
    initialCenter={{
      lat: 52.237049,
      lng: 21.017532
    }}
  >

    <Marker
      name={'Królikarnia'}
      position={{ lat: 52.189091, lng: 21.028411}}
    />

    {/* <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
      </div>
    </InfoWindow> */}
  </Map>
);

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA9VEL4Dc3zPp_y25SUmFDZOtC73O3dzSQ')
})(MapContainer)