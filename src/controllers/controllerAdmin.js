const path = require('path');
const fs = require('fs');

module.exports = {
    // (en el paralelo con dani se deberia llamar productsINDEX)
    index : (req,res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        //return res.sendFile(path.resolve(__dirname,"../data/products.json"))
        return res.render('./admin/products'
            ,{ css: '/admin/products.css',
            productos
        })
    // index: (req,res) =>{
    //     let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
    //     res.render(path.resolve(__dirname, '../views/admin/administrar'), {motos});
    // },
    },
    //Se muestra el formualrio de creacion
    productsCreate : (req, res) =>{
        return res.render ("./admin/productsCreate",{
        css: "/admin/productsCreate.css"})
    },
    // Accion de crear un producto
    productsSave : (req,res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        let ultimoProducto = productos.pop()
        productos.push(ultimoProducto)
        let nuevoProducto = {
            id : ultimoProducto.id + 1,
            product : req.body.product ,
            comentarios : req.body.comentarios,
            imagen : req.file.filename,
            brand : req.body.brand ,
            price : req.body.price 
        }
        productos.push(nuevoProducto)
        let nuevoProductoJson = JSON.stringify(productos, null, 2)
        fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),nuevoProductoJson)
        res.redirect('/products')
    },
    // Se muestra el formulario de edicion de un producto
    productEdit : (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        let miProducto = productos.find(producto => {
                if(producto.id == req.params.id ){
                    return producto
                }         
        });
        return res.render ("./admin/productEdit",{
            css:"/admin/productEdit.css",
            ...miProducto
        })
    },
    // // accion de editar un producto //
    // productUpdate : (req,res)=>{
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
    //     let miProducto = productos.find(producto => {
    //         if(producto.id == req.params.id ){
    //             return producto
    //         } 
    // });}
    // let productosActualizados = productos.map

    // Se el detalle de un producto en particular
    productsShow : (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        let miProducto = productos.find(producto => {
                if(producto.id == req.params.id ){
                    return producto
                }         
        });
        res.send(miProducto)
    },
    // Accion de eliminar un producto
    destroy : (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')))
        const productoDeleteId = req.params.id;
        const productosFinal = productos.filter(productos => productos.id != productoDeleteId);
        let productosFinalJSON = JSON.stringify(productosFinal, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productosFinalJSON);
        return res.redirect('/products') //res.send("El producto ha sido borrado exitosamente");
    }
}



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
