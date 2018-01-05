module.exports = function(app){
    
        var controller = app.controllers.ClienteController;
    
        app.route("/api/cliente")
            .get(controller.lista)
            .post(controller.insere);
    
        app.route("/api/cliente/:id")
            .get(controller.buscaId)
            .put(controller.altera)
            .delete(controller.delete);
    }