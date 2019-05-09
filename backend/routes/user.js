// en este archivo se exporta router que contiene todas las rutas declaradas para las diferentes
// funciones que existan en la carpeta de controladores


const express = require("express");

//Archivo que contiene los métodos del controlador de usuarios
const userController = require("../controllers/user");

const extractFile = require("../middleware/file");
const router = express.Router();

// con lavariable router apendizamos todos los métodos específicos que existan en el controlador
// de usuarios.
router.post("/signUp", extractFile, userController.createUser);
router.post("/loginVigilante", extractFile, userController.userLoginVigilante);
router.post("/loginAlumno", extractFile, userController.userLoginAlumno);

module.exports = router;
