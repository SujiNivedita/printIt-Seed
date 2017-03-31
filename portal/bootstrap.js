/**
 * Created by sathisu on 3/17/2017.
 */
/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    //'app',
    //'routes',
    'PrintIt/print',
    'PrintIt/print-ctrl',
    'PrintIt/header-ctrl',
    'PrintIt/footer-ctrl',
    'PrintIt/login-ctrl'
    //'episode/sidebar',
    //'config'
], function (require, angular) {

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['print']);
    });
});