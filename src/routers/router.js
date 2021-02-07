const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/register', controller.register)

module.exports = router;
 
