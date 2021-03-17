const path = require('path');
const fs = require('fs');

module.exports = {
    index : (req, res)=>{
        return res.render('./web/home',{
                                css: "web/home.css" }
                        )
             //Lo dejo como ejemplo de como se resuelve las vistas si no usamos el motor de plantilla .ejs (cuando usabamos directamente el html)      
             // return res.sendFile(path.resolve(__dirname,"../views/home.ejs")) 
    }
}
