const path = require('path');
const fs = require('fs');
const db = require('../database/models');

module.exports = {
    // Se muestra la pantalla de todos los productos
    index: (req,res) => {
        db.Product.findAll({
            include: [db.Brand, db.Size, db.Colour, db.Name, db.Style]
          })
        .then(function(productos){
            return res.render('./admin/products',{
                css : '/admin/products.css' ,
                productos
            })
        })
     },
    //Se muestra el formualrio de creacion
     productsCreate : (req,res) => {
         const names = db.Name.findAll()
         const brands = db.Brand.findAll()
         const colours = db.Colour.findAll()
         const sizes = db.Size.findAll()
         const styles = db.Style.findAll()
         Promise.all([names, brands, colours,sizes,styles])
            .then(([names, brands, colours,sizes,styles]) => {
                 res.render ("./admin/productsCreate",{
                         css: "/admin/productsCreate.css"
                        ,names
                        ,brands
                        ,colours
                        ,sizes
                        ,styles })
            })
     },
    // Accion de crear un producto
    productsSave : (req,res) => {
        db.Product.create({
            comments : req.body.comments,
            price    : req.body.price,
            nameId   : req.body.name,
            sizeId   : req.body.size,
            colourId : req.body.colour,
            brandId  : req.body.brand,
            styleId  : req.body.style 
        })
        res.redirect('/admin/products')
    },
    // Se muestra el formulario de edicion de un producto
    productEdit : (req,res) => {
        const names = db.Name.findAll()
        const brands = db.Brand.findAll()
        const colours = db.Colour.findAll()
        const sizes = db.Size.findAll()
        const styles = db.Style.findAll()
        const producto = db.Product.findByPk(req.params.id)
        Promise.all([names, brands, colours,sizes,styles,producto])
            .then(([names, brands, colours,sizes,styles,producto]) => {
                 res.render ("./admin/productEdit",{
                         css: "/admin/productEdit.css"
                        ,names
                        ,brands
                        ,colours
                        ,sizes
                        ,styles
                        ,producto })
            })
    },
    // accion de editar un producto 
    productUpdate : (req,res) => {
        db.Product.update({
            comments : req.body.comments,
            price    : req.body.price,
            nameId   : req.body.name,
            sizeId   : req.body.size,
            colourId : req.body.colour,
            brandId  : req.body.brand,
            styleId  : req.body.style 
        },{
            where : {
                id : req.params.id
            }
        });
        res.redirect('/admin/products')
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
    //Se muestra el formualrio de creacion
//     const platos = Dish.findAll();
//     const categorias = Category.findAll();
//     Promise.all([platos,categorias])
//     .then(([platos,categorias]) =>{
//         //return res.send(platos)
//         res.render(path.resolve(__dirname , '..','views','productos','productos') , {platos,categorias});
//     })
//     .catch(error => res.send(error))
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
