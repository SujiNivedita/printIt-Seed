/**
 * Created by sathisu on 3/17/2017.
 */
define([
        'angular',
        './view2'
    ],
    function(angular){
        return angular.module('print.view2-bootstrap',['ui.bootstrap'])
            .config(function($stateProvider,$urlRouterProvider){

                //$urlRouterProvider.otherwise('episode/home','episode/home/dashboard');

                $stateProvider.state('print.details1',{
                    url:'/details2',
                    abstract:false,
                    views:{
                        'site-content@': {
                            templateUrl:'PrintIt/view2/view2.htmll',
                            controller:'view2Ctrl'
                        }
                    }
                });

            });
    });

