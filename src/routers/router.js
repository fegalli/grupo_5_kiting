const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/register', controller.register)
router.get('/productCart', controller.productCart)
router.get('/productDetail', controller.productDetail)
router.get("/creacionProductos", controller.creacionProductos)
router.get("/modificacionProducto", controller.modificacionProducto)

module.exports = router;
 
