// import dotenv et sa config
const dotenv = require("dotenv");
require("dotenv").config();
// import express
const express = require("express");
const app = express();

//je demande a app d'écouter le port qui est stocker dans mon fichier d'environnement
app.listen(process.env.PORT, () => {
  console.log(`projet démarré : http://localhost:${process.env.PORT}`);
});
