define([
  './view1-bootstrap'

],function(module){
  module.controller('view1Ctrl',function($scope,$state,$rootScope,$http,$uibModal,viewRepo){
console.log("i am view1 AND IM ACTIVE");
    viewRepo.get().then(function(data){
      console.log(data);
    });
  });
});