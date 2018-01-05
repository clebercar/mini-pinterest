module.exports = function($scope, $filter, toastService, modalService, recursoProdutos){
    
    $scope.produtos = [];
    $scope.produto  = {};

    
    recursoProdutos.query(function(produtos){
        $scope.produtos = produtos
    }, function(error){
        console.log(error);
    });

    $scope.editar = function(id, $event){
        var produto = $filter('filter')($scope.produtos, { '_id': id });
        $scope.produto = produto[0];
        modalService.open($event, $scope.produto );
    }
   
    $scope.deletar = function(produto, $event){
        recursoProdutos.delete({produtoId: produto._id}, function(){
            var indice = $scope.produtos.indexOf(produto);
            $scope.produtos.splice(indice, 1);
            toastService.openToast($event, 'toast-danger md-toast-content' ,"Produto " + produto.nome + " removido.");
        }, function(error){
            console.log("Ocorreu um erro ao excluir o produto");
        });
    }
}