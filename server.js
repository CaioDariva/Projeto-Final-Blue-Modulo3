// Initial config
const mongodb = require("mongodb");
const express = require("express");
require("express-async-errors");
require("dotenv").config();
const cors = require("cors");

// End Points requires

// Express app and json
const app = express();
app.use(express.json());

// port config
const port = process.env.PORT || 3000;

// port being listened with callback function with console.log
app.listen(port, () => console.info("Server connected"));