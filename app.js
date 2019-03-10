// Requires
var express = require('express');
var mongoose = require('mongoose');

// inicializar varibales
var app = express();

// conexion bd
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb', (err, res) => {
	if (err) throw err;

	console.log('Base de datos \x1b[32m%s\x1b[0m', 'online');
});

// rutas
app.get('/', (req, res, next) => {
	res.status(200).json({
		ok: true,
		mensaje: 'Petición realizada correctamente'
	})
});

// escuchar peticiones
app.listen(3000, () => {
	console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});