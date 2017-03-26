/**
 * Created by sathisu on 3/17/2017.
 */
define([
        'angular',
        './view1'
    ],
    function(angular){
        return angular.module('print.view1-bootstrap',['ui.bootstrap'])
            .config(function($stateProvider,$urlRouterProvider){

                //$urlRouterProvider.otherwise('episode/home','episode/home/dashboard');

                $stateProvider.state('print.details',{
                    url:'/details',
                    abstract:false,
                    views:{
                        'site-content@': {
                            templateUrl:'PrintIt/view1/view1.html',
                            controller:'view1Ctrl'
                        }
                    }
                });

            });
    });
