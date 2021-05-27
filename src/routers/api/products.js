const express = require('express');
const router = express.Router();


const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
// //Listado de todos los productos
router.get('/', productsAPIController.list);
router.get('/newest', productsAPIController.newest);
router.get('/index', productsAPIController.index);
module.exports = router;