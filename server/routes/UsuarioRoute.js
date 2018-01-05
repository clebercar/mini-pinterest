module.exports = function (app) {

    // const multer = require("multer");
    
    // const storage = multer.diskStorage({
    //     destination : function(req, file, cb){
    //         cb(null,'./uploads/usuarios/');
    //     },
    //     filename: function(req, file, cb){
    //         cb(null, Date.now() + "-" + file.originalname );
    //     }
    // });

    // const upload = multer({ storage });

    var controller = app.controllers.UsuarioController;

    app.route("/api/usuario")
        .get(controller.lista);

    app.route("/api/usuario/:id")
        .get(controller.buscaId)
        .put(controller.altera)
        .delete(controller.delete);
}