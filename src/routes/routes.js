const routes = require("express").Router();

const LivrosController = require("../controllers/livrosController");
const LivroMiddlewares = require("../middlewares/livroMiddlewares");

routes.get("/livros", LivrosController.getAll);
routes.get("/livros/:id", LivroMiddlewares.validaId, LivrosController.getById);
routes.post("/livros", LivrosController.create);
routes.put("/livros/:id", LivroMiddlewares.validaId, LivrosController.update);
routes.delete("/livros/:id", LivroMiddlewares.validaId, LivrosController.del);
routes.get("/filterByTitle", LivrosController.filterByTitle);
routes.get("/filterAll", LivrosController.filterAll);
routes.get("/filterByAuthor", LivrosController.filterByAuthor);

module.exports = routes;
