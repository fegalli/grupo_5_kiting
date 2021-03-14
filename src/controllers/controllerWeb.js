const path = require('path');
const fs = require('fs');
const { json } = require('express');

module.exports = {
    index : (req, res)=>{
        return res.render('./web/home',{
                                css: "web/home.css" }
                        )
             //Lo dejo como ejemplo de como se resuelve las vistas si no usamos el motor de plantilla .ejs (cuando usabamos directamente el html)      
             // return res.sendFile(path.resolve(__dirname,"../views/home.ejs")) 
    },
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
    productCart : (req, res)=>{
        return res.render('./products/productCart', {
            css: "products/productCart.css"
        })
    },
    productDetail : (req, res)=>{
        return res.render('.products/productDetail',{
            css: "/products/productDetail.css"
        })
    },
    //Se muestran los productos 
    // (POR EL MOMENTO, LANZO EL JSON, NO TIENE PANTALLA)
    products : (req,res) => {
        return res.sendFile(path.resolve(__dirname,"../data/products.json"))
    },
    //Se muestra el formualrio de creacion
    productsCreate : (req, res) =>{
        return res.render ("./admin/productsCreate",{
        css: "/admin/productsCreate.css"})
    },

    // Accion de crear un producto
    productsSave : (req,res) => {
        console.log(req.body)
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        let ultimoProducto = productos.pop()
        productos.push(ultimoProducto)
        console.log(req.body)
        let nuevoProducto = {
            id : ultimoProducto.id + 1,
            product : req.body.product ,
            comentarios : req.body.comentarios,
            // imagen : req.body.imagen ,
            brand : req.body.brand ,
            price : req.body.price 
        }
        productos.push(nuevoProducto)
        let nuevoProductoJson = JSON.stringify(productos)
        fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),nuevoProductoJson)
        res.redirect('/products')
    },
    productEdit : (req, res) => {
        return res.render ("./admin/productEdit",{
            css:"/admin/productEdit.css"
        })
    }
}
        // let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        // let ultimaMoto = motos.pop();
        // motos.push(ultimaMoto);
        // console.log();
        // let nuevoProducto = {
        //     id: ultimaMoto.id +1,
        //     nombre : req.body.nombre,
        //     descripcion: req.body.descripcion,
        //     precio: req.body.precio,
        //     descuento: req.body.descuento,
        //     imagen: req.file.filename
        // }

        // motos.push(nuevoProducto);
        // let nuevoProductoGuardar = JSON.stringify(motos,null,2);
        // fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'), nuevoProductoGuardar);
        // res.redirect('/administrar');