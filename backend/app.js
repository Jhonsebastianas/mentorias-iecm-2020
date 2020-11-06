// Importación de librerias de externos
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// Importaciones de nuestros archivos
const database = require('./databaseConnection');

// Importamos las rutas de las URL para llamar a los servicios web.
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usuarios.router');
// Inicializamos la aplicación express
const app = express();
/* Hacemos uso de los middleware
	Estos son los encargados de que la aplicación se comunique con nuestro sistema operativo
	ejecutando métodos de las librerias que usamos.
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* Routes */
// Usamos las rutas importadas, Ejemplo de ws: localhost:3000/users
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);

module.exports = app;
