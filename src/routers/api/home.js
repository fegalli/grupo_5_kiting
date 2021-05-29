const express = require('express');
const router = express.Router();


const homeAPIController = require('../../controllers/api/homeAPIController');

//Rutas
// //Listado de todos los productos
router.get('/index', homeAPIController.index);
module.exports = router;