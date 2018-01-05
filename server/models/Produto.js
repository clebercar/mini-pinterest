const mongoose = require("mongoose");

const schema = mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    foto: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true
    },
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

mongoose.model("Produto", schema);
