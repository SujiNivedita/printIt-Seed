define([
  './view1-bootstrap'

],function(module){
  module.controller('view1Ctrl',function($scope,$state,$rootScope,$http,$uibModal,viewRepo,FileUploader, $sce){
    console.log("i am view1 AND IM ACTIVE");
    $scope.uploader = new FileUploader();
    var uploadURL = '/api/upload/' + currentUser._id
    $scope.uploadOptions = {
      queueLimit: 1,
      autoUpload: true,
      url: uploadURL
    }

    $scope.submit = function(){
      if (!$scope.uploader.queue[0]) return;
      $scope.uploader.queue[0].upload();
    }
  });
});