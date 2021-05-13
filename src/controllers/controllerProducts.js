const path = require('path');
const fs = require('fs');
const db = require('../database/models');


module.exports = {
    productCart : (req, res)=>{
        return res.render('./products/productCart', {
            css: "products/productCart.css"
        })
    },
    productDetail : (req, res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        let miProducto = productos.find(producto => {
                if(producto.id == req.params.id ){
                    return producto
                }         
        });
        return res.render('./products/productDetail',{
            css: "products/productDetail.css",
            ...miProducto
        })
    }, 
    allProducts: (req,res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        //return res.sendFile(path.resolve(__dirname,"../data/products.json"))
        return res.render('./products/allProducts'
            ,{ css: '/products/allProducts.css',
            productos
        })
    },
    // Accion de buscar y mostrar un set de productos
    find: (req,res) => {
        db.Product.findAll({
            include: [db.Brand, db.Size, db.Colour, db.Name, db.Style],
            where: {
                nameId   : req.body.name,
                sizeId   : req.body.size,
                colourId : req.body.colour,
                brandId  : req.body.brand,
                styleId  : req.body.style 
            }
            })
        .then(function(productos){
            return res.render('./products/products',{
                css : '/admin/products.css' ,
                productos
            })
        })
        },
        findStyle: (req,res) => {
            db.Product.findAll({
                include: [db.Brand, db.Size, db.Colour, db.Name, db.Style],
                where: {
                    styleId  : req.params.id
                }
                })
            .then(function(productos){
                return res.render('./products/products',{
                    css : '/admin/products.css' ,
                    productos
                })
            })
        }

}


// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const app = express();

// const methodOverride= require("method-override")
// app.use(methodOverride("_method"))

// let kites =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','products.json')));

// module.exports = {

// }}