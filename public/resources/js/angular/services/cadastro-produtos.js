module.exports = function($resource){

    var service = {};

    return $resource('http://localhost:3000/api/produto/:produtoId', null, {
        'update' : { 
            method: 'PUT'
        }
    });


}