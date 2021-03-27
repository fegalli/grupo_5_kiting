const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { body } = require('express-validator')


const controllerUsers = require('../controllers/controllerUsers')

const validacionesLogin = [
    body('email').isEmail().withMessage('Agregar un email válido'),
    body('email').custom( (value  ) =>{
      for (let i = 0; i < archivoUsuarios.length; i++) {
          if (archivoUsuarios[i].email == value) {
              return true    
          }
      }
      return false
    }).withMessage('Email no se encuentra registrado'),
  
    //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
    body('password').custom( (value, {req}) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == req.body.email) {
                if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
                  return true;
                }else{
                  return false;
                }
            }
        }
        
    }).withMessage('Usurio o contraseña no coinciden'),
]


router.get('/login', controllerUsers.login)
router.post('/login', validacionesLogin,controllerUsers.ingresar)
router.get('/register', controllerUsers.register)
router.post('/register', controllerUsers.create)

module.exports = router;