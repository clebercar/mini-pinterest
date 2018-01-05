module.exports = function (usuarioService) {
    
    return {
        
        restrict : "AE",

        scope : {
            filtro: "="
        },
        link : function(scope, elem, attrs){
            scope.islogged = usuarioService.islogged();
        },
        transclude : true,

        templateUrl : "../partials/menu.html"

    };
};
