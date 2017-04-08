define([
  './view1-bootstrap'

],function(module){
  module.controller('view1Ctrl',function($scope,$state,$rootScope,$http,$uibModal,viewRepo) {
    console.log("i am view1 AND IM ACTIVE");

    $scope.submit = function () {
      console.log($scope.upload);
      Upload.upload({
        url: '/uploads',
        method: 'post',
        data: $scope.upload
      }).then(function (response) {
        console.log(response.data);
        $scope.uploads.push(response.data);
        $scope.upload = {};
      })
    };
  });
});