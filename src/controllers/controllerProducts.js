const path = require('path');
const fs = require('fs');
const { json } = require('express');

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