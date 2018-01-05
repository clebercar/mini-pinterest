module.exports = function(app){

    var controller = app.controllers.ProdutoController;

    app.route("/api/produto")
        .get(controller.lista)
        .post(controller.insere);

    app.route("/api/produto/:id")
        .get(controller.buscaId)
        .put(controller.altera)
        .delete(controller.delete);
}