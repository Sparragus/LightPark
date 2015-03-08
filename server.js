var express    = require('express');
var app        = express();

var cors = require('cors');

var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var morgan     = require('morgan');

// Config =====================================================================
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

var config = require('./config');

// Database
mongoose.connect(config.database);

// Seed data
// var Parking = require('./models/parking');
// var parkings = [
// {
//   location: {coordinates:[-99.170141, 19.410352]},
//   status: false
// },
// {
//   location: {coordinates:[ -99.170090, 19.410360]},
//   status: false
// },
// {
//   location: {coordinates:[-99.170052, 19.410367]},
//   status: false
// },
// {
//   location: {coordinates:[-99.170012, 19.410375]},
//   status: false
// },
// {
//   location: {coordinates:[-99.169972, 19.410383]},
//   status: false
// },
// {
//   location: {coordinates:[-99.169932, 19.410391]},
//   status: false
// },
// {
//   location: {coordinates:[-99.169900, 19.410400]},
//   status: false
// },
// ];
// Parking.create(parkings);
// var User = require('./models/user');
// User.create({

// });

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Console logging 
app.use(morgan('dev'));

// CORS
app.use(cors());

// Routes
require('./routes.js')(app);

app.listen(app.get('port'), function() {
  console.log("Listening to requests at port", app.get('port'));
});