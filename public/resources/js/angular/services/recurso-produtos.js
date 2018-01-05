module.exports = function ($resource) {

    return $resource('http://localhost:3000/api/produto/:produtoId', null, {
        'update': {
            method: 'PUT'
        }
    });

}