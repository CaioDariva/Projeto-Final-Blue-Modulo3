const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    titulo:{
        type: String,
        require: true,
    },
    autor:{
        type: String,
        require: true,
    },
    resumo:{
        type: String,
        require: true,
    },
    imgUrl:{
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("Livro", livroSchema);