/**
 * Created by sathisu on 3/31/2017.
 */
define([
    './repo'
], function (ngModule) {
    return ngModule
        .service('Repo', function ($http, $rootScope) {

            this.login=function(username){
                return $http.get('/api/user',username);
            };

            this.register=function(userDetails){
                return $http.post('/api/user',userDetails);
            };
        });
});