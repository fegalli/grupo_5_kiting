const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator')
const { body } = require('express-validator');
const { rawListeners } = require('process');



module.exports = {
    login : (req,res)=>{
        return res.render('./users/login',{
            css : "users/login.css"
        })
    },
    register : (req, res)=>{
        return res.render('./users/register', {
            css: "users/register.css"
        })
    },
    create: (req, res) => {
        let errors = validationResult(req);
        //return res.send(req.body)
        if (errors.isEmpty()) {
          let user = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10), 
            role: 1
          }
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };

          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersJSON);
          res.redirect('/');
        } else {
            return res.render(path.resolve(__dirname, '../views/users/register'), {
            errors: errors.errors,  old: req.body
          });
        }
    },
    // ingresar: (req,res) =>{
    //   const errors = validationResult(req);
    //   if(errors.isEmpty()){
    //     let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
    //     let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
    //     delete usuarioLogueado.password;
    //     req.session.usuario = usuarioLogueado
    //     return res.redirect('/');   
    //   }else{
    //     res.render(path.resolve(__dirname, '../views/users/login'),{errors:errors.mapped(),old:req.body,css : "users/login.css"}); 
    //   }
    // }
    ingresar: (req, res)=>{
      let userEmail = req.body.email
      let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
      let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
      if (userEmail == usuarioLogueado.email){
        bcrypt.compare(req.body.password,10, function(err, response) {
          if(req.body.password != usuarioLogueado.password){
            res.redirect('/register?passwordMissMatch=true')
          } else {
            delete usuarioLogueado.password
            req.session.usuario = usuarioLogueado
            res.redirect('/')
          }
        });
      }
    },
    logout: (req,res) =>{
      delete req.session.usuario
      res.redirect('/')
    }
  }
