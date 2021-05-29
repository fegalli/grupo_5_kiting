const path = require('path');
const db = require('../../database/models');


const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { maxHeaderSize } = require('http');

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    index : (req,res) =>{
        db.Product.findAll({
            include: [db.Brand, db.Size, db.Colour, db.Name, db.Style]
          })
          .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    newest: (req,res) => {
        db.Product.findAll({
            include: [db.Brand, db.Size, db.Colour, db.Name, db.Style]
          })
        .then(products => {
            let newest = (productos) =>{
                let maxId = 0
                let newestProduct
                for(let i =1; i<productos.length ; i++){
                  if(productos[i].id > maxId){
                    maxId = productos[i].id
                    newestProduct = productos[i]
                  }
                }
                return newestProduct 
              }
            let lastProduct = newest(products)
            let respuesta = {
                meta: {
                    status : 200,
                    total: 1,
                    url: 'api/products/newest'
                },
                data: lastProduct
            }
                res.json(respuesta);
            })
    }
}


// let newest = (productos) => {
//     let maxDate 
//     let newestProduct 
//     for (let i = 0; i< productos.length; i++) {
        
//         // if( productos[i].createdAt > maxDate){
//         //     maxDate == productos[i].createdAt
//         //     newestProduct == productos[i]
//         maxDate == productos[i].createdAt
//         newestProduct == productos[i]
//         }
//     return newestProduct
// }; 