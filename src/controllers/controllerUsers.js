const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');


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
          res.redirect('/login');
        } else {
            return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
            errors: errors.errors,  old: req.body
          });
        }
    }}
