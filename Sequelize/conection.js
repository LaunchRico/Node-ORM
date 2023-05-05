const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'nuwest',
    'admin',
    'Admin123',
    {
        host: '20.51.251.129',
        dialect: 'mysql',
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });