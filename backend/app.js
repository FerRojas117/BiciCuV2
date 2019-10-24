const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// añadir rutas del folder routes
// se necesita añaddir cualquier archivo que contenga rutas, para Express
// pueda utilizar la información ue se mande a cualquiera de ellas
// como en la siguiente línea de código:
const rutasUsuario = require("./routes/user");
// y paso soeguido es con la variable declarada de express, utilizar
// la ruta  y la variable declarada

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


// variable de express que utliza alguna variable que requiere un archivo en la carpeta de routes,
// se debe poner para cada archivo en routes
app.use("/api/user", rutasUsuario);



module.exports = app;

