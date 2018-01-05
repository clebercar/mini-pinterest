module.exports = function(uri){

    const mongoose = require("mongoose");
    const db = mongoose.connection;

    mongoose.connect("mongodb://" + uri);

    db.on("connected", function(){
        console.log("Banco de dados conectado");
    });

    db.on("error", function(error){
        console.log("Ocorreu um erro na conexao. " + error);
    });

    db.on("disconnected", function(){
        console.log("Banco de dados desconectado.");
    });

    process.on('SIGINT', function(){
        db.close(function(){
            console.log("Aplicação terminada, conexão encerrada.");
            process.exit(0);
        });
    })
};
