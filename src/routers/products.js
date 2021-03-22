const express = require('express')
const router = express.Router()

const controllerProducts = require('../controllers/controllerProducts')


router.get('/productCart', controllerProducts.productCart)
router.get('/detail/:id', controllerProducts.productDetail)
router.get("/allproducts", controllerProducts.allProducts)

// router.get('/products/:id',controler.products // Detalle de un producto en particular

module.exports = router;



/// PARA PENSAR LUEGO

// const { Router } = require("express");
// const ControllersProducts = require("../controllers/ControllersProducts");
// Router.delete("delete/:id",ControllersProducts.destroy)