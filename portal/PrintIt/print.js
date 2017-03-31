/**
 * Created by sathisu on 3/17/2017.
 */
//main app file with main bootstrap route config
define([
        'angular',
        'ui-dynamic-router',
        './print-bootstrap',
        'ui-bootstrap',
        'angular-cookies',
        //'./dashboard/dashboard',
        //'./dashboard/dashboard-ctrl',
        //'ui-components/ui-component',
        './view1/view1',
       './view1/view1-ctrl'
    ],
    function(angular){
        return angular.module('print',[
                'ui.router',
                'ui.dynamic.router',
                'print-bootstrap',
                'ui.bootstrap'
                //'episode.popup',
                //'ui-components'
            ])
            .config(function ($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('print.login');

                $stateProvider
                    .state('print', {
                        url: '/print',
                        abstract: true,
                        views: {
                            'header': {
                                templateUrl: 'PrintIt/header.html',
                                controller: 'headerCtrl'
                            },
                            'footer': {
                                templateUrl: 'PrintIt/footer.html',
                                controller: 'footerCtrl'
                            }
                        },
                        resolve:{
                            auth:function($q,$window){

                            }
                        }
                    });
                $stateProvider
                    .state('print.login', {
                        url:'/home',
                        abstract:false,
                        views:{
                            'site-content@': {
                                templateUrl:'PrintIt/user/login.html',
                                controller:'loginCtrl'
                            }
                        },
                        resolve:{
                            auth:function($q,$window){

                            }
                        }
                    });

            })
            .run([
                '$rootScope',
                '$state',function($rootScope,$state,$window){

                    $rootScope.$state = $state;

                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        console.log($state.name);
                    });


                    $rootScope.$on('$stateChangeSuccess', function () {

                    });

                    $rootScope.$on('$stateNotFound', function () {

                    });

                    $rootScope.$on('$stateChangeError',
                        function (event, toState, toParams, fromState, fromParams, error) {
                            console.log(error);
                            //if(error === "Not Authorized"){
                            //    $state.go("login");
                            //}
                        });
                }]);
    });