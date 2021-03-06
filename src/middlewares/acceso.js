const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports =  (req,res,next) =>{
    res.locals.usuario = false
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario
        return next()
    } else { return res.render('./middlewares/deniedAccess'
            ,{ css: '/web/home.css'
            })
    }
}