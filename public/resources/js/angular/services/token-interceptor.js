module.exports = function($q,$window,$location,usuarioService){
    var interceptor = {};
    
    interceptor.request = function(config){  /*adiciona token no header de requisição garantindo seu envio para o servidor à cada requisição*/
        config.headers = config.headers || {};
       
        if($window.sessionStorage.token){ /*Se existe token no storage*/ 

            // console.log('Enviando token já obtido em cada requisição');
            config.headers['x-access-token'] = $window.sessionStorage.token;
            
            var usuario = usuarioService.getUsuario();
            config.headers['usuario-logado'] = usuario.id; /*revisa isso depois*/ 
        }

        return config;
    },

    interceptor.response = function(response){ /*interceptando resposta do servidor*/ 
        
        var token = response.headers('x-access-token');
        if(token != null){
            $window.sessionStorage.token = token;
            console.log('Token armazenado no storage', token);
        }

        return response;
    },

    interceptor.responseError = function(rejection){
        if(rejection != null && rejection.status === 401 && $location.path() != "/cadastro"){
            // console.log('Removendo token do storage');
            delete $window.sessionStorage.token;
            
            $location.path("/login");
        }
        return $q.reject(rejection);
    }

    return interceptor;
}