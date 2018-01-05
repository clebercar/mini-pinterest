module.exports = function (modalService) {

    return {
        templateUrl: "../partials/modal-cadastro.html",
        scope:{
            show:"="
        },
        link: function (scope, element, attrs) {
            
            var prod = {};

            scope.hideModal = function(){
                scope.show = false;
                scope.produto = {};
            }
           
            scope.$on('idProduto', function(event, produto){     
                scope.produto = produto;
            });
          
            element.on("keyup", function(event){
                
                prod = angular.copy(scope.produto); 
                
            });

            scope.submit = function(){
                scope.$emit("submitProduto", prod);
                scope.produto = {}; 
                scope.show = false;
            }

        },
        transclude: true
    }
}
