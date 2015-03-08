var main = require('./handlers/main');

var Parking = require('./models/parking');

module.exports = function(app) {
  // '/' routes
  app.get('/parkings', main.parkings);
  app.get('/parkings/checkIn', main.checkIn);
  app.get('/parkings/checkOut', main.checkOut);

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