'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/firstController');
  var users = require('../controllers/userController');


  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  //User Routes
   app.route('/user')
    .get(users.list_all_users)
    .post(users.create_a_user);


  app.route('/user/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);
};