const Livro = require("../models/Livro");


const getAll = async (req, res) => {
    try {
        const livros = await Livro.find();
        if (livros.length === 0)
        return res
          .status(404)
          .send({ message: "Não existem livros cadastrados!" });
        return res.send({ livros });
    } catch (err) {
        res.status(500).send({error: err.mesage});
    };
};


const getById = async (req, res) => {
    const { id } = req.params;

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
        res.status(500).send({error: err.mesage});
    };
};

const update = async (req, res) => {
    const {titulo, autor, resumo} = req.body;

    if (!titulo || !autor || !resumo) {
        res.status(400).send({mesage: "Você não preencheu todos os campos necessários."});
        return;
    };    

    res.livro.titulo = titulo;
    res.livro.autor = autor;
    res.livro.resumo = resumo;

    try {
        await res.livro.save();
        res.send({message: "Livro alterado com sucesso!"});
    } catch (err){
        res.status(500).send({error: err.mesage});
    };

};

const del = async (req, res) => {
    try {
        await res.livro.remove();
        return res.send({mesage: "Livro removido com sucesso."});
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const filterByTitle = async  (req, res) => {
    const titulo = req.query.titulo;
    
    if(!titulo) {
        res.status(400).send({ err: "Parâmetro não recebido" });
        return;
    };
    try {
        const livros = await Livro.find({"titulo": {'$regex': `${titulo}`} });
        return res.send({livros});
    } catch (err) {
        return res.status(500).send({ error: err.mesage });
    };
};

const filterAll = async (req, res) => {
    let { titulo, autor } = req.query;

    !titulo ? (titulo = "") : (titulo = titulo);
    !autor ? (autor = "") : (autor = autor);

    try {
        const livros = await Livro.find({
            "titulo": {'$regex': `${titulo}`, $options: 'i'}, 
            "autor": {'$regex': `${autor}`, $options: 'i'} 
        });

        if(livros.length === 0) {
            res.status(404).send({ err: "Livro não encontrado." });
        return;
        };

        return res.send({ livros });
    } catch (err) {
        return res.status(500).send({ error: err.mesage });
    };
};

const filterByAuthor = async  (req, res) => {
    const autor = req.query.autor;
    
    if(!autor) {
        res.status(400).send({ err: "Parâmetro não recebido" });
        return;
    };
    try {
        const livros = await Livro.find({"autor": {'$regex': `${autor}`} });
        return res.send({livros});
    } catch (err) {
        return res.status(500).send({ error: err.mesage });
    };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
    filterByTitle,
    filterAll,
    filterByAuthor
};