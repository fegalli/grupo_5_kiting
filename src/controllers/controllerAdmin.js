const path = require('path');
const fs = require('fs');
const db = require('../database/models');

module.exports = {
    // (en el paralelo con dani se deberia llamar productsINDEX)
    index: (req,res) => {
        db.Product.findAll()
        .then(function(productos){
            return res.render('./admin/products',{
                css : '/admin/products.css' ,
                productos
            })
        })
     },
    
    //Se muestra el formualrio de creacion
    productsCreate : (req, res) =>{
        return res.render ("./admin/productsCreate",{
        css: "/admin/productsCreate.css"})
    },

    // Accion de crear un producto
    productsSave : (req,res) => {
        db.Product.create({
           // id : 5, // hago esto para tratar saltear el error "Field 'id' doesn't have a default value"
            // price    : 1,//req.body.price,
            // comments : 1,//req.body.comments,
            // nameId   :  1,//req.body.name,
            // sizeId   :  1,//req.body.size,
            // brandId  :  1,//req.body.brand,
            // colourId : 1,
            // styleId  :  1//req.body.style 
        })
        res.redirect('/admin/create')
    },
    // Se muestra el formulario de edicion de un producto
    productEdit: (req,res) =>{
        db.Product.findByPk(req.params.id,{
            include: [ brand , size
            ]})
            .then(product=>{
                return res.render ("./admin/productEdit",{
                    css:"/admin/productEdit.css",
                    product,
                }) 
            })
                   
    },
    // accion de editar un producto 
    productUpdate : (req,res) => {
        db.Product.update({
            id : 1, // hago esto para tratar saltear el error "Field 'id' doesn't have a default value"
            price    : req.body.price,
            comments : req.body.comments,
            nameId   :  req.body.name,
            sizeId   :  req.body.size,
            brandId  :  req.body.brand,
            styleId  :  req.body.style 
        },{
            where : {
                id : req.params.id
            }
        });
        res.redirect('/admin/create')
    }, 
    // Se el detalle de un producto en particular
    // Mismo comportamiento que CRUD con json. Se debe mejorar
    productsShow : (req,res) => {
        db.Product.findByPk(req.params.id)
            .then((product)=>{
                res.json(product)
            })  
    },
    // Accion de eliminar un producto
    destroy : (req,res) =>{
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        });
        res.redirect('/admin/products')
    }
}

// --------------------------
// ---- CRUD OLD FASHION ---- 
// --------------------------
// index : (req,res) => {
//     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
//     //return res.sendFile(path.resolve(__dirname,"../data/products.json"))
//     return res.render('./admin/products'
//         ,{ css: '/admin/products.css',
//         productos
//     })
// },

// Accion de crear un producto
// productsSave : (req,res) => {
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
    //     let ultimoProducto = productos.pop()
    //     productos.push(ultimoProducto)
    //     let nuevoProducto = {
    //         id : ultimoProducto.id + 1,
    //         name : req.body.name ,
    //         comments : req.body.comments,
    //         imagen : req.body.comments,
    //         brand : req.body.brand ,
    //         price : req.body.price,
    //         colour : req.body.colour,
    //         size : req.body.size,
    //         style: 
    //     }
    //     productos.push(nuevoProducto)
    //     let nuevoProductoJson = JSON.stringify(productos, null, 2)
    //     fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),nuevoProductoJson)
        
    // },

    // Se muestra el formulario de edicion de un producto
    // productEdit : (req, res) => {
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
    //     let miProducto = productos.find(producto => {
    //             if(producto.id == req.params.id ){
    //                 return producto
    //             }         
    //     });
    //     return res.render ("./admin/productEdit",{
    //         css:"/admin/productEdit.css",
    //         miProducto
    //     })
    // },

        // Se el detalle de un producto en particular
    // productsShow : (req, res) => {
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
    //     let miProducto = productos.find(producto => {
    //             if(producto.id == req.params.id ){
    //                 return producto
    //             }         
    //     });
    //     res.json(miProducto)
    // },

    // accion de editar un producto 
    // productUpdate : (req,res)=>{
    //     // 1 - me traigo todos los productos
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))   
    //     // 2 - identifico mi producto
    //     let miProducto = productos.find(producto => {
    //         if(producto.id == req.params.id ){
    //             return producto
    //         }})
    //     // 3 - identifico mi producto en la lista de productos y escribo sus nusvos valores
    //     req.body.id = req.params.id;
    //     let productosUpdate = productos.map(producto =>{
    //         if(producto.id == miProducto.id){
    //             return req.body
    //         }
    //         return producto
    //     })
    //     // 4 - subo el nuevo json de productos
    //     let productosUpdateJSON = JSON.stringify(productosUpdate, null, 2)
    //     fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),productosUpdateJSON)
    //     return res.redirect('/admin/products')
    // },

    // destroy : (req, res) => {
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
    //     const productoDeleteId = req.params.id;
    //     const productosFinal = productos.filter(productos => productos.id != productoDeleteId);
    //     let productosFinalJSON = JSON.stringify(productosFinal, null, 2)
    //     fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productosFinalJSON);
    //     return res.redirect('/admin/products') //res.send("El producto ha sido borrado exitosamente");
    // },




//AYUDA PARA  LEVANTAR LA FOTO CON MULTER //
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
