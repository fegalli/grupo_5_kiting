const express = require('express')
const router = express.Router()

const controllerAdmin    = require('../controllers/controllerAdmin')

router.get('/products', controllerAdmin.products) // Listado de productos
router.get('/products/create', controllerAdmin.productsCreate) // Formulario de creaction de productos
router.post('/products/create', controllerAdmin.productsSave) // Accion de creacion de un producto
router.get('/products/edit', controllerAdmin.productEdit) // Formulario de edicion de un producto
// WIP
// Accion de edicion de un producto
 
module.exports  = router