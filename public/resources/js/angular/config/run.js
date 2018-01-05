module.exports = function($rootScope, $location, usuarioService){

    var rotasBloqueadasUsuariosLogados = ['/login','/cadastro'];
    var rotasBloqueadasUsuariosNaoLogados = ['/dashboard'];
    
    $rootScope.$on("$locationChangeStart", function(){
        
        if(usuarioService.islogged() && rotasBloqueadasUsuariosLogados.indexOf($location.path()) != -1){
            $location.path("/dashboard");
        }else if(usuarioService.islogged() == false && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1){
            $location.path("/");
        }
    })
}