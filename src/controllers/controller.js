const path = require('path');

module.exports = {
    index : (req, res)=>{
        return res.render('home',{
             css: "home.css" })
             //Lo dejo como ejemplo de como se resuelve las vistas si no usamos el motor de plantilla .ejs (cuando usabamos directamente el html)      
             // return res.sendFile(path.resolve(__dirname,"../views/home.ejs")) 
    },
    login : (req,res)=>{
        return res.render('login',{
            css : "login.css"
        })
    },
    register : (req, res)=>{
        return res.render('register', {
            css: "register.css"
        })
    },
    productCart : (req, res)=>{
        return res.render('productCart', {
            css: "productCart.css"
        })
    },
    productDetail : (req, res)=>{
        return res.render('productDetail',{
            css: "productDetail.css"
        })
    },
    productsCreate : (req, res) =>{
        return res.render ("productsCreate",{
        css: "productsCreate.css"})
    },
    modificacionProducto : (req, res) => {
        return res.render ("modificacionProducto",{
            css:"modificacionProductos.css"
        })
    },
    products : (req,res) => {
        return res.sendFile(path.resolve(__dirname,"../data/products.json"))
    }
}
 