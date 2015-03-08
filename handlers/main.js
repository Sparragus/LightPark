var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var Parking = require('../models/parking');
var User = require('../models/user');

exports.parkings = function(req, res, next) {
  if (!req.query.lon) {
    return res.json({
      error: 'No longitude was defined.'
    });
  }
  if (!req.query.lat) {
    return res.json({
      error: 'No latitude was defined.'
    });
  }

  // -99.186848, 19.440124
  var longitude = Number(req.query.lon);
  var latitude = Number(req.query.lat);

  var point = {
    'type': 'Point',
    coordinates: [longitude, latitude]
  };
  
  var options = {
    spherical: true,
    maxDistance: 10 / 6371, // ten kilometers
    distanceMultiplier: 6371
  };

  Parking.geoNear(point, options, function(err, parkings, stats) {
    if (err) {
      return next(new Error(err));
    }
    res.json(parkings);
  });
};

exports.checkIn = function(req, res, next) {
  if (!req.query.userId) {
    return res.json({
      error: 'User is not defined.'
    });
  }
  if (!req.query.parkingId) {
    return res.json({
      error: 'Parking is not defined.'
    });
  }

  var userId = req.query.userId;
  var parkingId = req.query.parkingId;

  Parking.findOne(parkingId, function(err, parking) {
    if (err) { return next(new Error(err)); }
    User.findById(userId, function(err, user) {
      if (err) { return next(new Error(err)); }
      user.atParking = parking._id;
      user.checkIn = Date.now();
      user.save(function(err) {
        if (err) { return next(new Error(err)); }
        return res.json({checkIn: this.checkIn});
      });
    });
  });

};