const mongoose = require("mongoose");
const Livro = require("../models/Livro");

const validaId = async (req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({error: "Id inválido"});
        return;
    };

    try {
        const livro = await Livro.findById(id);
        if(!livro){
            return res.status(404).send({msg: "Livro não encontrado."});
        }
        res.livro = livro;
    } catch (err) {
        return res.status(500).send({error: err});
    };

    next();
};

module.exports = { validaId };