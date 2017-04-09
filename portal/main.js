/**
 * Created by sathisu on 3/17/2017.
 */
require.config({

    // alias bower_componentsraries paths
    paths: {
        'domReady': 'bower_components/requirejs-domready/domReady',
        'angular': 'bower_components/angular/angular',
        'angular-loader': 'bower_components/angular-loader/angular-loader',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies',
        'ui-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'ng-upload': 'bower_components/angular-file-upload/dist/angular-file-upload',
        'lodash': 'bower_components/lodash/dist/lodash'
        //'bootstrap': 'bower_components/bootstarp/dist/lodash'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular-ui-router': ['angular'],
        'underscore.string': ['lodash'],
        'ui-bootstrap': ['angular'],
        'angular-cookies':['angular'],
        'ng-upload':['angular'],
        'angular': {
            exports: 'angular',
            init: function() {
                if (window.console) return;
                var noop = function() {};
                window.console = {  log: noop, error: noop, warn: noop };
            }
        }
    },

    // kick start application
    deps: [
        'lodash',
        './bootstrap',
        //'./config',
        'angular-ui-router',
        'angular-cookies',
        'ui-bootstrap',
        'ng-upload'
        ]
});