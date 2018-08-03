import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9VEL4Dc3zPp_y25SUmFDZOtC73O3dzSQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div
                        style={{ height: `100vh`, flexGrow: 1 }}
                        aria-hidden="true"
                      />,
    mapElement: <div
                  style={{ height: `100%` }}
                  role="application"
                  aria-label="Map with restaurants marked"
                />,
  }),
  withScriptjs,
  withGoogleMap
)(({places, selectedPlace, selectPlace, cancelSelection, animation}) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 52.205108, lng: 21.017532 }}
  >
    {places.map(place => (
      <Marker
        key={place.name}
        title={place.name}
        position={place.position}
        onClick={selectPlace(place)}
        animation={selectedPlace.id === place.id && animation}
      >
        {selectedPlace.id === place.id
          ? <InfoWindow onCloseClick={cancelSelection}>
              <div>
                <h2>{place.name}</h2>
                {place.photo === 'error'
                  ? <p>Photo coud not be loaded</p>
                  : <div>
                      <img
                        src={place.photo}
                        alt={`${place.name}`}
                      />
                      <p>Powered by Foursquare</p>
                    </div>
                }
              </div>
            </InfoWindow>
          : null
        }
      </Marker>
    ))

    }
  </GoogleMap>
);

export default MapComponent
