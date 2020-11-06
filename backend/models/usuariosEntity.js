const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseConnection');

// Definimos una clase ES6 de javascript
class Usuario extends Model { 
    // Creamos un método de clase
    getNombreCompleto() {
        return [this.nombres, this.apellidos].join(' ');
    }
}

// Configuración para el modelo de sequelize
const opciones = { 
    sequelize: sequelize, // Base de datos a la cual se va a conectar
    tableName: 'usuarios', // Nombre de la tabla o entidad en la bd
    timestamps : false // Creación de reporte y/o actualización: false
};

// Creamos nuestra 'Entidad' en express
Usuario.init({
    idUsuario: { type: DataTypes.BIGINT, primaryKey: true},
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    clave: { type: DataTypes.STRING(60) },
    activo: { type: DataTypes.BOOLEAN, defaultValue: 0 },
}, opciones);

// Exportamos Usuarios para poder usarlo en otros archivos javascript
module.exports = Usuario;