const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override') // Parte de la confing que nos deja usar put y delete
const session = require('express-session') // habilitacion de cookies
const cookieParser = require('cookie-parser')
//app.use(express.static(__dirname+'/public'));



// Seteo de elementos estaticos 
app.use(express.static(path.resolve(__dirname, '../public')));
    // Los recursos estaticos son aquellos que no pasan por el proceso de renderizado y que son cargados directamente
    // por el cliente, ej imagenes, css, js, etc. Para poder acceder aellos en nuestras vistas hace falta aclararle
    // a express donde vamos aestar almancenado esos recuersos.
    // para acceder a alguno de estos recursos desde nuestras vistas solo hace falta aclarar la ruta a dicho recurso. Por que? 
    // por que express ya sabe que nuestros recursos estaticos se alancenan en la carpeta -public- y buscara los archivos
    // a partir de esa carpeta.

// Configuracion necesaria para capturar informacion de los formularios //
app.use(express.urlencoded({ extended: false })); //URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.json())
app.use(methodOverride('_method'));//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios

// Configuracion necesaria para el uso de session
app.use(session({
    secret: 'grupo_5_kiting',
    resave: false,
    saveUninitialized: true
}));
// Configuracion necesaria para el manejo de cookies
app.use(cookieParser());

// Configurando EJS
app.set('view engine', 'ejs');  // Aca le estoy diciendo a express que voy a utilizar un motor de plantillas y que ese motor es ejs
app.set('views', './src/views'); // con esta linea le digo a express en que carpeta estan mis vistas. Si no la utizo, por default express ira a buscar una carpeta que se llame -views-
//PRO-TIP el metodo .set() permite definir configuraciones de express

// Requiero middlewares
// const acceso = require('./middlewares/acceso');
// const accesoAdmin = require('./middlewares/accesoAdmin');
// const userLogged = require('./middlewares/userLogged');

// Uso middlewares
// app.use(acceso)
// app.use(accesoAdmin)
// app.use(userLogged)


// Llamado de rutas (o 'requerir rutas')
const routerWeb   = require('./routers/web');
const routerUsers = require('./routers/users');
const routerProducts = require('./routers/products')
const routerAdmin = require('./routers/admin');
const apiStylesRouter = require('./routers/api/styles')
const apiProductsRouter = require('./routers/api/products')


// Para usar rutas
app.use(routerWeb);
app.use(routerUsers)
app.use(routerProducts) 
app.use(routerAdmin)
app.use('/api/styles',apiStylesRouter)
app.use('/api/products',apiProductsRouter)

//Levantar el servidor
app.listen(process.env.PORT || '3001', () => console.log('Servidor corriendo en el puerto 3001'))

