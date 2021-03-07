const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/register', controller.register)
router.get('/productCart', controller.productCart)
router.get('/productDetail', controller.productDetail)
router.get("/modificacionProducto", controller.modificacionProducto) // Corregir a ingles

// Listado de productos
router.get('/products', controller.products)
// Formulario de crreaction de productos
router.get("/products/create", controller.productsCreate)


module.exports = router;
 
