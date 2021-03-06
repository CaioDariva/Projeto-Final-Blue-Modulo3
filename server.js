require("dotenv").config();
const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");
var cors = require('cors');

connectToDb();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(cors()); 
app.options("*", cors());

app.use(routes);

app.listen(port, () => console.info(`Servidor rodando em http://localhost:${port}`));