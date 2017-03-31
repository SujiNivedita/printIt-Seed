'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter your name'
  },
  email: {
    type: String,
    Required: 'Kindly enter your email ID'
  },
  phone: {
    type: String,
    Required: 'Kindly enter your phone number'
  },
  geolocation: {
    type: String,
    Required: 'Kindly enter location'
  },
  userType: {
    type: [{
      type: String,
      enum: ['trial', 'premium', 'basic']
    }],
    default: ['trial']
  }
});

module.exports = mongoose.model('User', UserSchema);