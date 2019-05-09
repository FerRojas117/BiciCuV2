const express = require("express");

const userController = require("../controllers/user");
const extractFile = require("../middleware/file");
const router = express.Router();

router.post("/signUp", extractFile, userController.createUser);
router.post("/loginVigilante", extractFile, userController.userLoginVigilante);
router.post("/loginAlumno", extractFile, userController.userLoginAlumno);

module.exports = router;
