const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const LivrosController = require("../controllers/livrosController");
const LivroMiddlewares = require("../middlewares/livroMiddlewares");

routes.get("/livros", LivrosController.getAll);
routes.get("/livros/:id", LivroMiddlewares.validaId, LivrosController.getById);
routes.post("/livros", LivrosController.create);
routes.update("/livro/:id", LivroMiddlewares.validaId, LivrosController.update);
routes.delete("livro/:id", LivroMiddlewares.validaId, LivrosController.del);

module.exports = routes