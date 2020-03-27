//imports
const knex = require('knex');
const config = require('../../knexfile');

const get_mode = () => process.env.NODE_ENV;
const connection = knex(config[get_mode()]);

module.exports = connection;
