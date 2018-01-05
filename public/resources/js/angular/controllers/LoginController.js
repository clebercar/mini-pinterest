module.exports = function ($scope, $http, $window, $location, $mdDialog, modalService, usuarioService,toastService) {
    $scope.usuarios = [];
    $scope.usuario = {};

    $scope.submeter = function ($event) { /*cadastro de usuarios*/

        $scope.usuario.foto = $scope.image.url;

        $http.post("http://localhost:3000/api/cadastro", $scope.usuario)
            .then(function (response) {
                toastService.openToast($event, 'toast-success md-toast-content', 'Cadastro realizado com sucesso.');
                $location.path("/login");
            }, function (error) {
                toastService.openToast($event, 'toast-danger md-toast-content', 'Ocorreu um erro.Por favor entre em contato com o administrador.');
                console.log(error);
            });

    }
   

    $scope.login = function ($event) {
        $http.post("http://localhost:3000/api/autenticar", $scope.usuario)
            .then(function (response) {
                toastService.openToast($event, 'toast-success md-toast-content', 'Login realizado com sucesso.');
                $location.path("/dashboard");
                usuarioService.setUsuario(response.data);
            }, function (error) {
                toastService.openToast($event, 'toast-danger md-toast-content' ,"Usuário e senha inválidos.");
                console.log(error);
            });
    }

  
}
