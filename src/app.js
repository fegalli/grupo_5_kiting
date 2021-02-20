const express = require('express');
const app = express();
const path = require('path');

// Seteo de elementos estaticos 
app.use(express.static(path.resolve(__dirname, '../public')));

// Llamado de rutas
const router = require('../src/routers/router');
app.use('/', router);
app.listen(process.env.PORT || '3000', () => console.log('Servidor corriendo en el puerto 3000'))

// Configurando EJS
app.set('view engine', 'ejs');  // Aca le estoy diciendo a express que voy a utilizar un motor de plantillas y que ese motor es ejs
app.set('views', './src/views'); // con esta linea le digo a express en que carpeta estan mis vistas. Si no la utizo, por default express ira a buscar una carpeta que se llame -views-
    //PRO-TIP el metodo .set() permite definir configuraciones de express
