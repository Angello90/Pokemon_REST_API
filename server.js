require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const index_router = require("./src/routes/index.route");
const pokemon_router = require('./src/routes/pokemon.route');
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

app.use('/', index_router);

app.use('/pokemon', pokemon_router);

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Server is running : http://localhost:${process.env.PORT || 3000}`);
})