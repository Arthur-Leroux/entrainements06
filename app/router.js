//import d'express dans router
const express = require("express");
//import de expressRouter
const router = express.Router();
const mainController = require("./controllers/mainController");

//Les routes
router.get("/", mainController);

//on exporte
module.exports = router;
