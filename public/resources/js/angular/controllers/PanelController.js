module.exports = function ($scope, $http, $routeParams, modalService) {

    
    $scope.filtro = "";
    


    var indice, idProduto;


    $scope.openModal = function ($event) {
        modalService.open($event);
    }

};