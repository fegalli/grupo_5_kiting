const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path');


const controllerAdmin    = require('../controllers/controllerAdmin')

//Requerir el middleware de prueba
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));
 
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

router.get('/admin/products',acceso,controllerAdmin.index) // Listado de productos
router.get('/admin/products/:id',acceso, controllerAdmin.productsShow)   // Se muestra un producto en particular
router.get('/admin/create',acceso, controllerAdmin.productsCreate) // Formulario de creaction de productos
router.post('/admin/create',acceso,uploadFile.single('imagen') ,controllerAdmin.productsSave) // Accion de creacion de un producto
router.get('/admin/edit/:id',acceso, controllerAdmin.productEdit) // Formulario de edicion de un producto
router.put('/admin/edit/:id',uploadFile.single('imagen') ,controllerAdmin.productUpdate) // Accion de edicion de un producto
router.get('/admin/delete/:id', controllerAdmin.destroy) // Accion de eliminar un producto

module.exports  = router 

// router.get('/administrar', acceso, controllersAdmin.index);
// router.get('/administrar/create', controllersAdmin.create);
// router.post('/administrar/create', upload.single('imagen'), controllersAdmin.save);
// router.get('/administrar/detail/:id', controllersAdmin.show);
// router.get('/administrar/edit/:id', controllersAdmin.edit);
// router.put('/administrar/edit/:id', upload.single('imagen'), controllersAdmin.update);
// router.get('/administrar/delete/:id', controllersAdmin.destroy);