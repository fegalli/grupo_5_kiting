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

router.get('/admin/products', controllerAdmin.index) // Listado de productos
router.get('/admin/products/:id', controllerAdmin.productsShow)   // Se muestra un producto en particular
router.get('/admin/create', controllerAdmin.productsCreate) // Formulario de creaction de productos
router.post('/admin/create',uploadFile.single('imagen') ,controllerAdmin.productsSave) // Accion de creacion de un producto
router.get('/admin/edit/:id', controllerAdmin.productEdit) // Formulario de edicion de un producto
//router.put('/products/edit/:id', controllerAdmin.productUpdate) // Accion de edicion de un producto
router.get('/admin/delete/:id', controllerAdmin.destroy) // Accion de eliminar un producto

module.exports  = router 

// router.get('/administrar', acceso, controllersAdmin.index);
// router.get('/administrar/create', controllersAdmin.create);
// router.post('/administrar/create', upload.single('imagen'), controllersAdmin.save);
// router.get('/administrar/detail/:id', controllersAdmin.show);
// router.get('/administrar/edit/:id', controllersAdmin.edit);
// router.put('/administrar/edit/:id', upload.single('imagen'), controllersAdmin.update);
// router.get('/administrar/delete/:id', controllersAdmin.destroy);