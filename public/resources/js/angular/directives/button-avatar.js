module.exports = function(usuarioService){

    return{
        scope:{
            foto: "@",
            nome: "@"
        },
        templateUrl: '../partials/button-avatar.html',
        link : function(scope, element, attrs){
            
            var usuario = usuarioService.getUsuario();
  
            scope.foto = usuario.foto;
            scope.nome = usuario.nome;

            scope.openMenu = function($mdMenu, $event){
                originatorEv = ev;
                $mdMenu.open(ev);
            }

            scope.sair = function($event){
                usuarioService.logout();
            }
        }
    }
};