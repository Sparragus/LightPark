var express    = require('express');
var app        = express();

var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var morgan     = require('morgan');

// Config =====================================================================
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

// Database
mongoose.connect('localhost/hackcdmx');

// Seed data
// var Parking = require('./models/parking');
// Parking.create({
//   location: {coordinates:[-99.181323, 19.440478]},
//   status: false
// });
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

// Routes
require('./routes.js')(app);

app.listen(app.get('port'), function() {
  console.log("Listening to requests at port", app.get('port'));
});