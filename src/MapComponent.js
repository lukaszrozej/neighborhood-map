import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9VEL4Dc3zPp_y25SUmFDZOtC73O3dzSQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 52.192853, lng: 21.017532 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 52.192853, lng: 21.017532 }} />}
  </GoogleMap>
);

export default MapComponent
