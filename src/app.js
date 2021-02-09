const express = require('express');
const app = express();
const path = require('path');

// Seteo de elementos estaticos 
app.use(express.static(path.resolve(__dirname, '../public')));

// Llamado de rutas
const router = require('../src/routers/router');
 
app.use('/', router);

app.listen(process.env.PORT || '3000', () => console.log('Servidor corriendo en el puerto 3000'))
