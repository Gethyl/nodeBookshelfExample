var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : process.env.DB_HOST || '127.0.0.1',
    user     : process.env.DB_USER || 'gethyl',
    password : process.env.DB_PASSWORD || 'test',
    database : process.env.DB_DATABASE || 'gethyl',
    charset  : 'utf8'
  }
});
 
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;