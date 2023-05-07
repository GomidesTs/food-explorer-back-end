const config = require('../../../knexfile')
const knex = require('knex')

const connection = knex(config.development)

knex.raw('GRANT ALL PRIVILEGES ON database.* TO `%`@`%` IDENTIFIED BY password;')

module.exports = connection