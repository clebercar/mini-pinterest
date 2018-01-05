const mongoose = require("mongoose");

const schema = mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    ramo: {
        type: String,
        required: true
    }

});

mongoose.model("Cliente", schema);
