var mongoose = require('mongoose');

var parkingSchema = new mongoose.Schema({
  location: {
    // index: '2dsphere',
    'type': {
      type: String,
      enum: 'Point',
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  // location: {type: [Number], index: '2d'},
  occupied: {
    type: Boolean,
    default: false
  }
});

parkingSchema.index({
  location: '2dsphere'
});

module.exports = mongoose.model('Parking', parkingSchema);