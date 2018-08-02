# Neighborhood map

This is a project made for Udacity Front-End Nanodegree.
It follows [this project rubric](https://review.udacity.com/#!/rubrics/1351/view)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It uses [Google Maps API](https://developers.google.com/maps/)
to display map, markers and info windows.

It uses [Foursquare Places API](https://developer.foursquare.com/places-api)
to display fetch photos of featured places.

It uses [MATERIAL-UI](https://material-ui.com/)
for user interface.

## Installation and running the application

Clone or download the repository.
Install the dependecies with `npm install`

### Development mode

Run with `npm start`

### Production mode

Build the app for production with `npm run build`

Use can deploy it using [Node](https://nodejs.org/) and [serve](https://github.com/zeit/serve):

```sh
npm install -g serve
serve -s build
```
The last command shown above will serve your static site on the port **5000**.

In production mode the app uses a service worker.

For details and other deployment options see [Create React App user Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
