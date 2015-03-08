var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;


var userSchema = new mongoose.Schema({
  atParking: {type:ObjectId, default: null},
  checkIn: {type:Date, default: null},
  checkOut: {type:Date, default: null},
});

module.exports = mongoose.model('User', userSchema);