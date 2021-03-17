const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path');


const controllerAdmin    = require('../controllers/controllerAdmin')

// WIP
// Accion de edicion de un producto
 
// CONFIGURACION DE MULTER (Como podemos indicar para subir el archivo nombre y donde guardarlo)
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.resolve(__dirname,"../../public/img/products"))
    },
    filename : function(req,file,cb){
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const uploadFile = multer({storage})

router.get('/products', controllerAdmin.products) // Listado de productos
router.get('/products/create', controllerAdmin.productsCreate) // Formulario de creaction de productos
router.post('/products/create',uploadFile.single('imagen') ,controllerAdmin.productsSave) // Accion de creacion de un producto
router.get('/products/edit/:id', controllerAdmin.productEdit) // Formulario de edicion de un producto
//router.put('/products/edit/:id', controllerAdmin.productUpdate) // Accion de edicion de un producto
router.get('/products/:id', controllerAdmin.productsShow)   // Se muestra un producto en particular
router.get('/products/delete/:id', controllerAdmin.destroy) // Accion de eliminar un producto
module.exports  = router 
