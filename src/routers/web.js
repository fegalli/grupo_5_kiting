const express = require('express')
const router = express.Router()

const controller = require('../controllers/controllerWeb')

router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/register', controller.register)
router.get('/productCart', controller.productCart)
router.get('/productDetail', controller.productDetail)
router.get("/productEdit", controller.productEdit) // Corregir a ingles

// Listado de productos
router.get('/products', controller.products)
// Formulario de creaction de productos
router.get("/products/create", controller.productsCreate)
// Accion de creacion de un producto
router.post('/products', controller.productsSave)


// Detalle de un producto en particular
// router.get('/products/:id',controler.products



module.exports = router;
 
