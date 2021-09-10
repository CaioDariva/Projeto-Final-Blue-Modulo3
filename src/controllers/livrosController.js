const Livro = require("../models/Livro");


const getAll = async (req, res) => {
    try {
        const livros = await Livro.find();
        return res.send({ livros });
    } catch (err) {
        res.status(500).send({error: err});
    };
};


const getById = async (req, res) => {
    const { id } = req.params.id

    try {
        const livro = await Livro.findById(id);
        if (!livro){
            res.status(404).send({message: "Livro não encontrado"});
            return;
        };
        return res.send({livro});
    } catch (err) {
        res.status(500).send({error: err});
    };
};


const create = async (req,res) => {
    const {titulo, autor, resumo} = req.body;

    if (!titulo || !autor || !resumo) {
        res.status(400).send({mesage: "Você não preencheu todos os campos necessários."});
        return;
    };

    const novoLivro = await new Livro({
        titulo, 
        autor, 
        resumo,
    });

    try {
        await novoLivro.save();
        return res.status(201).send({msg: "Livro criado com sucesso", novoLivro});
    } catch (err) {
        res.status(500).send({error: err});
    };
};

const update = async (req, res) => {
    const {titulo, autor, resumo} = req.body;

    if (!titulo || !autor || !resumo) {
        res.status(400).send({mesage: "Você não preencheu todos os campos necessários."});
        return;
    };    

    res.livro.titulo = titulo
    res.livro.autor = autor
    res.livro.resumo = resumo

    try {
        await res.livro.save();
        res.send({message: "Livro alterado com sucesso!"})
    } catch (err){
        res.status(500).send({error: err});
    }

};

const del = async (req, res) => {
    try {
        await res.livro.remove()
        return res.send({mesage: "Livro removido com sucesso."})
    } catch (err) {
        res.status(500).send({error: err});
    };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
};