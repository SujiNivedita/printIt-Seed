/**
 * Created by sathisu on 3/31/2017.
 */
define([
    './print'
],function(module){
    return module.controller('loginCtrl',function($scope,$uibModal,$state,$window) {
        $scope.name='';
        $scope.password='';
        $scope.email='';
        $scope.phone='';
        $scope.geolocation='';
        $scope.login=function(){

        };
        $scope.register=function(){

        };
    });
});