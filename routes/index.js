const express = require('express');
const app = express();
///RUTAS DE PRODUCTOS Y USUARIOS
app.use( '/products', require('./products'));
app.use('/auth', require('./auth'));

module.exports = app;