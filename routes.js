var main = require('./handlers/main');

var Parking = require('./models/parking');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });
  app.get('/checkin', function(req, res) {
    res.render('checkin');
  });

  app.get('/checkout', main.checkOut);

  // '/' routes
  app.get('/parkings', main.parkings);
  app.get('/parkings/checkIn', main.checkIn);
  app.get('/parkings/checkOut', main.checkOut2);

  // 500 - Server error
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(500);
  });

  // 404 - Not found
  app.use(function(req, res) {
    res.sendStatus(404);
  });
};