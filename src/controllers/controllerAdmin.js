const path = require('path');
const fs = require('fs');
const { json } = require('express');

module.exports = {
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
        //res.redirect('/products')
    },
    // Se muestra el formulario de edicion de un producto
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