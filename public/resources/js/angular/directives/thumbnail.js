module.exports = function($location){
    return {
        restrict : "E",
        scope : {
            foto : "@",
            descricao : "@",
            nome : "@",
            editar : "&",
            deletar : "&",
            link:"@"
        },
        transclude : true,
        link: function(scope, attrs, elem){
            scope.isFeed = $location.path() === "/" ? true : false;
        },
        templateUrl : '../partials/thumbnail.html'
    }
};