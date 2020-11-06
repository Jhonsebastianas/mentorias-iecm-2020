const Usuario = require('../models/usuariosEntity');
const usuarioController = {};
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");

/**
 * DOCUMENTACIÓN: 
 * Querys básicas: https://sequelize.org/master/manual/model-querying-basics.html
 */

usuarioController.crearUsuario = async (req, res) => {
    const newUser = Usuario.build(
        {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            username: req.body.correo.split('@')[0],
            correo: req.body.correo,
            clave: req.body.clave,
            activo: 0
        }
    );
    await newUser.save();
    console.log('Usuario almacenado con exito');
    res.json({ status: 'usuario creado' });
}

// Traemos todos los datos de usuarios de la bd
usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

usuarioController.loginSencillo = async (req, res) => {
    const condicion = {
        where: {
            [Op.and]: [
                { correo: req.body.correo },
                { clave: req.body.clave }
            ]
        }
    }
    const usuario = await Usuario.findAll(condicion);
    // SELECT * FROM usuarios WHERE correo = 'x' AND clave = 'Y';
    res.json(usuario);
}

module.exports = usuarioController;