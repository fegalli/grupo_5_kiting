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
        return res.render('.products/productDetail',{
            css: "/products/productDetail.css"
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
//     destroy : (req, res) => {
       
//         let kites = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
//         const kiteDeleteId = req.params.id;
//         const kiteFinal = kites.filter(kites => kites.id != kiteDeleteId);
//         let kitesGuardar = JSON.stringify(kiteFinal,null,2)
//         fs.writeFileSync(path.resolve(__dirname, '../database/products.json'),kitesGuardar);
//         return res.send("El producto ha sido borrado exitosamente");
// }}