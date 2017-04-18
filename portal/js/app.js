angular
  .module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'gallery': {
            templateUrl: 'views/myContent.html',
            controller: 'contenCtrl'
          },
          'v2': {
            template: 'V2',
            controller: 'V2Ctrl'
          },
          'v3': {
            template: 'V3',
            controller: 'V3Ctrl'
          },
          'v4': {
            template: 'V4',
            controller: 'V4Ctrl'
          },
          'v5': {
            template: 'V5',
            controller: 'V5Ctrl'
          },
          'v6': {
            template: 'V6',
            controller: 'V6Ctrl'
          }
        }
      });
    $urlRouterProvider.otherwise("/");

     $locationProvider.html5Mode(true);
  })
  .controller("contenCtrl", function($scope,$http,$state) {
    console.log("i am view1 AND IM ACTIVE");
  $scope.success=false;
    getMyFiles();
    function getMyFiles(){
      $http.get('/myFiles/58f5a937527d24e5dd5ea61e').then(function(data){
        console.log(data);
        $scope.fileList=data.data;
      })
    }
    $scope.submit = function () {
      $scope.success=false;
      console.log($scope.filefield);
      var fd = new FormData();
        fd.append('filefield', $scope.filefield);
      $http.post('/upload/58f5a937527d24e5dd5ea61e',fd,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
            }).then(function(data){
                if(data.data.message=="Success"){
                    $scope.filefield='';
                    angular.element("input[type='file']").val(null);
                  $scope.success=true;
                  getMyFiles();
                }
            });
          }
  })
  .controller("V2Ctrl", function($scope) {
    $scope.foo = "bar";
  })
  .controller("V3Ctrl", function($scope) {
    $scope.foo = "bar";
  })
  .controller("V4Ctrl", function($scope) {
    $scope.foo = "bar";
  })
  .controller("V5Ctrl", function($scope) {
    $scope.foo = "bar";
  })
  .controller("V6Ctrl", function($scope) {
    $scope.foo = "bar";
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
