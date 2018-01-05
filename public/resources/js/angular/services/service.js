angular.module("service",['ngResource'])
.factory("usuarioService",  function($resource){
    return $resource('http://portfolio.rest/api/usuario/:id', null, {
        'update' : {
            method : 'PUT'
        }
    });
});