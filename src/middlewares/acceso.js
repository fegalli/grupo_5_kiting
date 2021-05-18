const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports =  (req,res,next) =>{
    if(req.session.usuario == null ){
                return res.render('./middlewares/deniedAccess'
        ,{ css: '/web/home.css'
        })
    } else {
        return next()
    }
}
