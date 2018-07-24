import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9VEL4Dc3zPp_y25SUmFDZOtC73O3dzSQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({places, selectedPlace, openInfoWindow, closeInfoWindow}) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 52.192853, lng: 21.017532 }}
  >
    {places.map(place => (
      <Marker
        key={place.name}
        title={place.name}
        position={place.position}
        onClick={openInfoWindow}
      >
        {selectedPlace === place.name
          ? <InfoWindow onCloseClick={closeInfoWindow}>
              <h2>{place.name}</h2>
            </InfoWindow>
          : null
        }
      </Marker>
    ))

    }
    {/* {props.isMarkerShown &&
      <Marker position={{ lat: 52.192853, lng: 21.017532 }}>
        <InfoWindow>
          <h2>Hello!</h2>
        </InfoWindow>
      </Marker>
    } */}
  </GoogleMap>
);

export default MapComponent
