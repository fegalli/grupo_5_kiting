const express = require('express');
const router = express.Router();


const stylesAPIController = require('../../controllers/api/stylesAPIController');

//Rutas
// //Listado de todos los estilos
router.get('/', stylesAPIController.list);

module.exports = router;