// On créer des objet de configuration

const { response } = require("express");

const mainController = {
  home: function (req, res) {
    response.render("index");
  },
};
module.exports = mainController;
