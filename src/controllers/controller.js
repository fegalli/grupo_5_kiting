const path = require('path');

module.exports = {
    index : (req, res)=>{
        return res.render('home')
        // return res.sendFile(path.resolve(__dirname,"../views/home.ejs")) Lo dejo como ejemplo de como se resuelve las vistas si no usamos el motor de plantilla .ejs (cuando usabamos directamente el html)
    },
    login : (req,res)=>{
        return res.render('login')
    },
    register : (req, res)=>{
        return res.render('register')
    },
    productCart : (req, res)=>{
        return res.render('productCart')
    },
    productDetail : (req, res)=>{
        return res.render('productDetail')
    }
}
 