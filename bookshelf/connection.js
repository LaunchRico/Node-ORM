// Setting up database connection using Bookshelf.js
// ======================================================
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '20.51.251.129',
        user: 'admin', // Your database username here
        password: 'Admin123', // Your database password here
        database: 'nuwest' // Your database name here
    }
});

var bookshelf = require('bookshelf')(knex);