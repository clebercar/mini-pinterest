module.exports = function (app) {

    var controller = app.controllers.AuthController;
    var controllerFeed = app.controllers.ProdutoController;
    var controllerUsuario = app.controllers.UsuarioController;

    app.post('/api/autenticar', controller.auth);
    app.get("/api/feed", controllerFeed.listaAll);
    app.post('/api/cadastro', controllerUsuario.insere);
    app.use("/*", controller.verificaToken);
   

}