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
//   occupied: true
// },
// {
//   location: {coordinates:[ -99.170090, 19.410360]},
//   occupied: false
// },
// {
//   location: {coordinates:[-99.170052, 19.410367]},
//   occupied: true
// },
// {
//   location: {coordinates:[-99.170012, 19.410375]},
//   occupied: false
// },
// {
//   location: {coordinates:[-99.169972, 19.410383]},
//   occupied: true
// },
// {
//   location: {coordinates:[-99.169932, 19.410391]},
//   occupied: false
// },
// {
//   location: {coordinates:[-99.169900, 19.410400]},
//   occupied: true
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

// Views
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Setup static files =========================================================
app.use(express.static(__dirname + '/public'));


// Console logging 
app.use(morgan('dev'));

// CORS
app.use(cors());

// Routes
require('./routes.js')(app);

app.listen(app.get('port'), function() {
  console.log("Listening to requests at port", app.get('port'));
});