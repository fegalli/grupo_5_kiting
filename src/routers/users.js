const path = require('path');
const fs = require('fs');
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { body } = require('express-validator')
const {check} = require("express-validator")


const controllerUsers = require('../controllers/controllerUsers')
const userLogged = require(path.resolve(__dirname,'../middlewares/userLogged'));
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));

let archivoUsuarios =JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {
    encoding: 'utf-8'
  }))

const validacionesLogin = [
    body('email').isEmail().withMessage('Agregar un email válido'), // Me fijo que tenga "formato email"
    body('email').custom(value  =>{
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
const validacionesRegistro = [ 
      check('email').isEmail().withMessage('Agregar un email válido'),
      //Aqui valido que el email no este registrado previamente
        body('email').custom( (value, req) =>{
            for (let i = 0; i < archivoUsuarios.length; i++) {
                if (archivoUsuarios[i].email == req.body.email) {
              return false;
            }else{
              return true;
            }
        }
    }
    ).withMessage('El correo ya fue ingresado previamente'),
// Chequeo que haya contraseña y que el minimo sea 8 caracteres
    check('password')
            .notEmpty().withMessage('Debes ingresar una contraseña').bail()
            .isLength({min: 8}).withMessage('Debes ingresar una contraseña con 8 caractéres como mínimo'),

    ]


router.get('/login',userLogged, controllerUsers.login) // Se muestra la pantalla de login
router.post('/login',userLogged, validacionesLogin,controllerUsers.ingresar) // Accion de loguearse
router.get('/logout',acceso, controllerUsers.logout) // Accion de deslogueo
router.get('/register',userLogged, controllerUsers.register)
router.post('/register',   controllerUsers.create) //userLogged
//
// validacionesRegistro,
module.exports = router;