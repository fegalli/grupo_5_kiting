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
        // probe: req.params ententiendo que viene por get
        // req.body cuando lo hice por post
        // intente usar el objeto 'location' pero no me lo reconoce
        // let query = new URLSearchParams(location.search)
        // console.log(query) --> error : 'location is not defined' 
        db.Product.findAll({
            include: [db.Brand, db.Size, db.Colour, db.Name, db.Style],
            where: {
                nameId   : 1,//req.params.nameId,
                sizeId   : 1,//req.body.size,
                colourId : 1,//req.body.colour,
                brandId  : 1,//req.body.brand,
                styleId  : 1//req.body.style 
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