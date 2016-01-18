# FreeCodeCamp - Timestamp Microservice
This repository contains a small full-stack Javascript web application.

This was done in order to complete the [timestamp microservice
challenge](http://www.freecodecamp.com/challenges/timestamp-microservice) from
[FreeCodeCamp](http://www.freecodecamp.com).

This repository will return a JSON representation of the unix timestamp and
natural date, given a proper query string to the `/` endpoint.

## Live Version
This application can be found [live on
Heroku](http://still-spire-9161.herokuapp.com/).

## Installation and Startup
To run this application locally, first install the dependencies by running `npm
install` in the root directory of the application.

Then, start the server by running `nodejs server.js`. **Note:** Replace `nodejs`
with `node` if your system's executable is called `node`.

## Usage
The application will parse the query string passed into the `/` endpoint, and
return JSON with a `unix` property and a `natural` property. These properties
represent the unix timestamp and a human-readable date, respectively.

### Example Input
```
https://still-spire-9161.herokuapp.com/December%2015,%202015
https://still-spire-9161.herokuapp.com/1450137600
```

### Example Output
```
{ "unix": 1450137600, "natural": "December 15, 2015" }
```


