/**
 * Created by sathisu on 3/27/2017.
 */
define([
    './repo'
], function (ngModule) {
    return ngModule
        .service('viewRepo', function ($http, $rootScope) {

        this.get=function(){
            return $http.get('/api/first');
        };

        this.create=function(firstData){
            return $http.post('/api/first',firstData);
        };

        this.delete=function(id){
            return $http.delete('/api/first'+id);
        }
        this.upload=function(file,id){
            return $http.post('/upload',file,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
            });
        }
        });
});