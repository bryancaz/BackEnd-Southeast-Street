const express  = require('express');
const app = express();
const ctrlAuth = require('../controllers/auth')
///RUTAS DE LOGIN Y SING UP

app.post('/signup', ctrlAuth.registrarUsuario);

app.post('/login', ctrlAuth.login)


module.exports = app;