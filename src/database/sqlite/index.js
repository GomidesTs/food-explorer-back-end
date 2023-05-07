const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const knex = require('../knex')

async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, '..', 'database.db'),
        driver: sqlite3.Database
    })

    const tableExists = await database.get(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='users'"
    )

    if (tableExists) {
        knex.insert({
            name: 'rocketseat',
            email: 'admin@foodexplorer.com',
            password: 'rocketseat',
            avatar: null,
            isAdmin: true
        }).into('users')
            .then(() => console.log('Usuário criado com sucesso'))
            .catch((err) => console.error(err))
    }

    return database
}

module.exports = sqliteConnection
