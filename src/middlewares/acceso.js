const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports =  (req,res,next) =>{
        return res.render('./middlewares/middlewareWIP'
        ,{ css: '/web/home.css'
        })
    }
