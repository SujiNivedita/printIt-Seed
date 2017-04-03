/**
 * Created by sathisu on 3/31/2017.
 */
define([
    './services'
], function (ngModule) {
    return ngModule
        .service('Repo', function ($http, $rootScope) {

            this.login=function(username){
                return $http.post('/user/login/',username);
            };

            this.register=function(userDetails){
                return $http.post('/user/register',userDetails);
            };
        });
});