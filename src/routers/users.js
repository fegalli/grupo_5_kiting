const path = require('path');
const fs = require('fs');
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { body } = require('express-validator')
const {check} = require("express-validator")


const controllerUsers = require('../controllers/controllerUsers')
//prueba para la charla de las 11
let archivoUsuarios =JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {
    encoding: 'utf-8'
  }))
//  console.log(archivoUsuarios)
//----------

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
      body('email').isEmail().withMessage('Agregar un email válido'),
      body('confirm').custom((value, {req}) =>{
          if(req.body.password == value ){
              return true    // Si yo retorno un true  no se muestra el error     
          }else{
              return false   // Si retorno un false si se muestra el error
          }    
      }).withMessage('Las contraseñas deben ser iguales'),
      //Aqui valido que el email no este registrado previamente
        body('email').custom( (value, {req}) =>{
            for (let i = 0; i < archivoUsuarios.length; i++) {
                if (archivoUsuarios[i].email == req.body.email) {
                    if(bcrypt.compareSync(value, archivoUsuarios[i].email)){
              return false;
            }else{
              return true;
            }
        }
    }
        }).withMessage('El correo ya fue ingresado previamente'),
// Chequeo que haya contraseña y que el minimo sea 8 caracteres
    check('password')
            .notEmpty().withMessage('Debes ingresar una contraseña').bail()
            .isLength({min: 8}).withMessage('Debes ingresar una contraseña con 8 caractéres como mínimo'),

    ]


router.get('/login', controllerUsers.login) // Se muestra la pantalla de login
router.post('/login', validacionesLogin,controllerUsers.ingresar) // Accion de loguearse
router.get('/register', controllerUsers.register)
router.post('/register', validacionesRegistro, controllerUsers.create)

// 
module.exports = router;