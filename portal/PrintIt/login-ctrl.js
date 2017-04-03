/**
 * Created by sathisu on 3/31/2017.
 */
define([
    './print'
],function(module){
    return module.controller('loginCtrl',function($scope,$uibModal,$state,$window,Repo,$rootScope) {
        $scope.hide =false;
        $scope.credentials={
            name:"",
            password:""
        };
        $scope.userDetails={
            name:"",
            email:"",
            phone:"",
            geolocation:"",
            password:""
        };
        $scope.register=function(){
            Repo.register($scope.userDetails).then(function(data){
                console.log("registration successful");
                $scope.hide=true;
            })
        };
        $scope.login=function(){
            Repo.login($scope.credentials).then(function(data){
                console.log(data.data[0]);
                if(data.data[0].hasOwnProperty("_id")){
                    $rootScope.userID=data.data[0]._id;
                    $state.go("print.details");
               }
            });
        };

    });
});