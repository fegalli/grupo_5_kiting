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
        db.Product.findAll(
            // {
            //   having : {createdAt : max(createdAt)                    
            // }
            // }
            )
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
    }   
}
