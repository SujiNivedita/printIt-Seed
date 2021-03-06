'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};

exports.register_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.login_user = function(req, res) {
  console.log(req.body);
  User.find({}).where('name').equals(req.body.name).exec(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

//exports.register_user = function(req, res) {
//  console.log(req.body);
//  User.find({}).where('name').equals(req.body).exec(function(err, user) {
//    if (err)
//      res.send(err);
//    res.json(user);
//  });
//};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate(req.params.userId, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};
