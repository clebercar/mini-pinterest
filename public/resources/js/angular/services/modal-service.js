module.exports = function ($mdDialog, recursoProdutos, toastService, usuarioService) {

    var elem = angular.element(document.body);

    service = {};

    var mensagem = "";

    service.open = function ($event, produto) {

        $mdDialog.show({
            parent: elem,
            targetEvent: $event,
            templateUrl: '../partials/modal-cadastro.html',
            clickOutsideToClose: true,
            locals: { p: produto },
            controller: controller
        });
    }


    function controller($scope, $mdDialog, p) {

        $scope.produto = p ? p : {};

        var usuarioLogado = usuarioService.getUsuario();

        $scope.produto.usuario = usuarioLogado.id;
        
        $scope.close = function () {
            $mdDialog.hide();
        }

        $scope.cadastrar = function ($event) {
            if (p) {
                recursoProdutos.update({ produtoId: $scope.produto._id }, $scope.produto,
                    function () {
                        $mdDialog.hide();
                        toastService.openToast($event, 'toast-success md-toast-content','Produto ' + $scope.produto.nome + ' alterado com sucesso');
                    }, function (error) {
                        toastService.openToast($event, 'toast-danger md-toast-content', "Não foi possível alterar o produto " + $scope.produto.nome);
                        console.log('Não foi possível alterar');
                    });
            }else{
                recursoProdutos.save($scope.produto, function(){ 
                    $mdDialog.hide();
                    toastService.openToast($event, 'toast-success md-toast-content', 'Produto ' + $scope.produto.nome + ' cadastrado com sucesso');
                    $scope.produto = {};
                }, function(error){
                    toastService.openToast($event, 'toast-danger md-toast-content', "Não foi possível cadastrar o produto");
                    console.log("Não foi possível cadastrar o produto");
                });
            }

        }
    }




    return service;

};