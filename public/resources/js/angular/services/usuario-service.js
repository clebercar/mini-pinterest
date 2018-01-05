module.exports = function($window, $location){
    
    service ={};

    service.setUsuario = function(user){
        $window.sessionStorage.setItem('usuario', JSON.stringify(user));
    }

    service.getUsuario = function(){
        return JSON.parse($window.sessionStorage.getItem('usuario'));
    }

    service.islogged = function(){
        if($window.sessionStorage.getItem('usuario')){
            return true;
        }else{
            return false;
        }
    }

    service.logout = function(){
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.usuario;
        $location.path('/login');
    }

    return service;
}