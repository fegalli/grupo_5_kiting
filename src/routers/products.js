const express = require('express')
const router = express.Router()

const controllerProducts = require('../controllers/controllerProducts')


router.get('/productCart', controllerProducts.productCart)
//router.get('/detail/:id', controllerProducts.productDetail)
//router.get("/products", controllerProducts.allProducts) // pantalla de productos
router.post("/products", controllerProducts.find) // Accion de buscar un set de productos
router.get("/products/style/:id", controllerProducts.findStyle) // Pantalla con productos de ciertas categorias
//router.get('/admin/products/:id', controllerAdmin.productsShow)   // Se muestra un producto en particular

// router.get('/products/:id',controler.products // Detalle de un producto en particular

module.exports = router;
