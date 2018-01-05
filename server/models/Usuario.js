const mongoose = require("mongoose");

const schema = mongoose.Schema({

    login: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: true
    },
    produtos: [{
        produto_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
        }
    }],
    foto: {
        type: String,
        required: true,
        trim: true
    }

});


mongoose.model("Usuario", schema);
