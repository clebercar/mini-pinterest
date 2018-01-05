module.exports = function () {
    
    return {
        
        restrict : "AE",

        scope : {
            produtos : "="
        },

     
        link : function(scope,element){
            element.on('click', function(){
                console.log("kkk");
                scope.produto = {};
            });
        },

        transclude : true,

        templateUrl : "../partials/btn-abre-m.html"

    };
};
