const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports =  (req,res,next) =>{
        return res.render('./middlewares/middlewareWIP'
        ,{ css: '/web/home.css'
        })
    }

        
    // module.exports = (req,res,next) =>{
    //     //Variable locals (super global - vive en las vistas )
    //     res.locals.usuario = false;
    //     if(req.session.usuario){
    //         res.locals.usuario = req.session.usuario;
    //         return next();
    //     }else if(req.cookies.email){
    //         let usuario = archivoUsuarios.find(usuario => usuario.email == req.cookies.email)
    //         //return res.send(usuario);
    //         //delete usuario.password;
    //         req.session.usuario = usuario;
    //         res.locals.usuario = usuario;
    //         return next();
    //     }else{
    //         return next();
    //     }
    // }