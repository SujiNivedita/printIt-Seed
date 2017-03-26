/**
 * Created by sathisu on 3/17/2017.
 */
define([
    'module',
    'angular',
    './view1/view1-bootstrap'
    //'./view2/view2-bootstrap'
],function(module,angular){
    return angular.module('print-bootstrap', ['print.view1-bootstrap']);

});

//define([
//    'module',
//    'angular',
//    './dashboard/dashboard-bootstrap',
//    './events/events-bootstrap',
//
//
//],function(module,angular){
//    return angular.module('episode-bootstrap', ['episode.dashboard-bootstrap',
//        'episode.survey-bootstrap','episode.meetings-bootstrap']);
//
//});