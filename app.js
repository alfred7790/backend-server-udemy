// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// inicializar varibales
var app = express();

// body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');


// conexion bd
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb', (err, res) => {
	if (err) throw err;

	console.log('Base de datos \x1b[32m%s\x1b[0m', 'online');
});

// rutas
app.use('/usuarios', usuarioRoutes );
app.use('/login', loginRoutes );
app.use('/', appRoutes );


// escuchar peticiones
app.listen(3000, () => {
	console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});