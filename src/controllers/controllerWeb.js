const path = require('path');
const fs = require('fs');
const db = require('../database/models');


module.exports = {
    // index : (req, res)=>{
    //     return res.render('./web/home',{
    //                             css: "web/home.css" }
    //                     )
    //          //Lo dejo como ejemplo de como se resuelve las vistas si no usamos el motor de plantilla .ejs (cuando usabamos directamente el html)      
    //          // return res.sendFile(path.resolve(__dirname,"../views/home.ejs")) 
    // }
    index: (req,res) => {
        const names = db.Name.findAll()
        const brands = db.Brand.findAll()
        const colours = db.Colour.findAll()
        const sizes = db.Size.findAll()
        const styles = db.Style.findAll()
        Promise.all([names, brands, colours,sizes,styles])
           .then(([names, brands, colours,sizes,styles]) => {
                res.render ('./web/home',{
                        css: "web/home.css"
                       ,names
                       ,brands
                       ,colours
                       ,sizes
                       ,styles })
           })

     }
}
