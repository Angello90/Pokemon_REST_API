require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const path = require("path");
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const index_router = require("./src/routes/index.route");
const pokemon_router = require('./src/routes/pokemon.route');
const users_router = require("./src/routes/users.route");


const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Pokemon API",
            version : "beta 0.0.1",
            description : "APi for pokemon"
        },
        servers : [
            {url : `http://localhost:${process.env.PORT || 3000}`}
        ]
    },
    apis : ["./src/routes/*js"]
}

const specs = swaggerJsDoc(options)

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/src/public')));
app.set("views", path.join(__dirname, "/src/views"));

app.set('view engine', 'ejs');

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

app.use('/', index_router);

app.use('/pokemon', pokemon_router);

app.use('/users', users_router);


app.use((req, res, next) =>{
    res.status(404).json({
        status : 404,
        message : "Error : Not disponible ressource"
    })
})


app.listen(process.env.PORT || 3000, () =>{
    console.log(`Server is running : http://localhost:${process.env.PORT || 3000}`);
})

module.exports = app;