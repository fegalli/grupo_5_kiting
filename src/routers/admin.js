const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path');
const {check} = require("express-validator")


const controllerAdmin    = require('../controllers/controllerAdmin')

//Requerir el middleware
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));
const accesoAdmin = require(path.resolve(__dirname,'../middlewares/accesoAdmin'));
 
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


const validacionesProducto = [
    check('name').notEmpty().withMessage('Debes ingresar un nombre para el producto'),
    check('style').notEmpty().withMessage('Debes ingresar el estilo del producto'),
    check('size').notEmpty().withMessage('Debes ingresar el tamaño del producto'),
    check('brand').notEmpty().withMessage('Debes ingresar la marca del producto'),
    check('colour').notEmpty().withMessage('Debes ingresar el color del producto'),
    check('price').notEmpty().isInt().withMessage("Debes ingresar un precio valido"),
    check('description')
            .notEmpty().withMessage('Debes ingresar una descripcion').bail()
            .isLength({min: 20}).withMessage('Debes ingresar una descripción con 20 caractéres como mínimo')
]

router.get('/admin/products', acceso,accesoAdmin,controllerAdmin.index) // Listado de productos
router.get('/admin/products/:id',acceso,accesoAdmin,controllerAdmin.productsShow)   // Se muestra un producto en particular
router.get('/admin/create',acceso,accesoAdmin, controllerAdmin.productsCreate) // Formulario de creaction de productos 
router.post('/admin/create',acceso,accesoAdmin,validacionesProducto,uploadFile.single('imagen') ,controllerAdmin.productsSave) // Accion de creacion de un producto 
router.get('/admin/edit/:id',acceso,accesoAdmin, controllerAdmin.productEdit) // Formulario de edicion de un producto
router.post('/admin/create',acceso,accesoAdmin,uploadFile.single('imagen') ,controllerAdmin.productsSave) // Accion de creacion de un producto
router.get('/admin/edit/:id',acceso,accesoAdmin,controllerAdmin.productEdit) // Formulario de edicion de un producto
router.put('/admin/edit/:id',acceso,accesoAdmin,uploadFile.single('imagen') ,controllerAdmin.productUpdate) // Accion de edicion de un producto
router.get('/admin/delete/:id',acceso,accesoAdmin,controllerAdmin.destroy) // Accion de eliminar un producto

module.exports  = router 

// router.get('/administrar', acceso, controllersAdmin.index);
// router.get('/administrar/create', controllersAdmin.create);
// router.post('/administrar/create', upload.single('imagen'), controllersAdmin.save);
// router.get('/administrar/detail/:id', controllersAdmin.show);
// router.get('/administrar/edit/:id', controllersAdmin.edit);
// router.put('/administrar/edit/:id', upload.single('imagen'), controllersAdmin.update);
// router.get('/administrar/delete/:id', controllersAdmin.destroy);


// router.get('/admin/edit/:id',acceso, controllerAdmin.productEdit) // Formulario de edicion de un producto
