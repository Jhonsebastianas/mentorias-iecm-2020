const { Sequelize } = require('sequelize');
// Definimos los datos de conexión
const database = 'simpledatabase'; // Nombre de la base de datos
const username = 'root'; // Usuario de la bd: (root por defecto)
const password = '';
const host = 'localhost'; // La ip donde estara alojada la base de datos, en este caso localhost es la Ipv4

// Usamos el objeto definido por la librería Sequelize para conectarnos a la bd
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});

// Validamos que tengamos conexión a la base de datos
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;