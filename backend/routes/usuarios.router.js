const exprees = require('express');
const router = exprees.Router();

// Llamamos al controllador de usuario
const usuario = require('../controllers/usuarios.controller');

// Creamos una ruta por la cual se podra acceder a el servicio
// Desde la web o por postman
router.post('/registrarUsuario', usuario.crearUsuario);
router.get('/', usuario.getUsuarios);
router.post('/login-sencillo', usuario.loginSencillo);

module.exports = router;