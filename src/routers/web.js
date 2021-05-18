const express = require('express')
const router = express.Router()

const controllerWeb = require('../controllers/controllerWeb')

router.get('/', controllerWeb.index)

module.exports = router;
 
