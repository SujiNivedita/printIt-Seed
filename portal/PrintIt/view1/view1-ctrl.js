define([
  './view1-bootstrap'

],function(module){
  module.controller('view1Ctrl',function($scope,$state,$rootScope,$http,$uibModal) {
    console.log("i am view1 AND IM ACTIVE");
    getMyFiles();
    function getMyFiles(){
      $http.get('/myFiles/'+$rootScope.userID).then(function(data){
        console.log(data);
        $scope.fileList=data.data;
      })
    }
    $scope.submit = function () {
      console.log($scope.filefield);
      var fd = new FormData();
        fd.append('filefield', $scope.filefield);
      $http.post('/upload/'+$rootScope.userID,fd,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
            }).then(function(data){
                if(data.data.message=="Success"){
                  alert("uploaded sucessfully");
                  $state.reload();
                }
            });
    };
  })
  .directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
});