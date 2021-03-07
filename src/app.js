const express = require('express');
const app = express();
const path = require('path');

// Seteo de elementos estaticos 
app.use(express.static(path.resolve(__dirname, '../public')));
    // Los recursos estaticos son aquellos que no pasan por el proceso de renderizado y que son cargados directamente
    // por el cliente, ej imagenes, css, js, etc. Para poder acceder aellos en nuestras vistas hace falta aclararle
    // a express donde vamos aestar almancenado esos recuersos.
    // para acceder a alguno de estos recursos desde nuestras vistas solo hace falta aclarar la ruta a dicho recurso. Por que? 
    // por que express ya sabe que nuestros recursos estaticos se alancenan en la carpeta -public- y buscara los archivos
    // a partir de esa carpeta.

// Llamado de rutas
const router = require('./routers/web');
app.use('/', router);
app.listen(process.env.PORT || '3000', () => console.log('Servidor corriendo en el puerto 3000'))

// Configurando EJS
app.set('view engine', 'ejs');  // Aca le estoy diciendo a express que voy a utilizar un motor de plantillas y que ese motor es ejs
app.set('views', './src/views'); // con esta linea le digo a express en que carpeta estan mis vistas. Si no la utizo, por default express ira a buscar una carpeta que se llame -views-
    //PRO-TIP el metodo .set() permite definir configuraciones de express

// Configuracion necesaria para capturar informacion de los formularios
app.use(express.urlencoded({extended : false}))
app.use(express.json())
