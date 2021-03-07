const { Router } = require("express");
const ControllersProducts = require("../controllers/ControllersProducts");

Router.delete("delete/:id",ControllersProducts.destroy)