const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports =  (req,res,next) =>{
    // res.locals.usuario = false
    if(req.session.usuario.role == 2){
        res.locals.usuario.role = req.session.usuario.role
        return next()
    } else { 
        return res.render('./middlewares/deniedAccessAdmin'
            ,{ css: '/web/home.css'
            })
    }
}
