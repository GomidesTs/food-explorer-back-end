const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const knex = require('../knex')
const { hash } = require('bcryptjs')

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
            password: await hash('rocketseat', 8),
            isAdmin: true
        }).into('users')
            .then(() => console.log('Usuário criado com sucesso'))
            .catch((err) => console.error(err))
    }

    knex.raw("SELECT name FROM sqlite_master WHERE type='table'")
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });

    knex.schema.raw("PRAGMA table_info(ingredients)").then((result) => {
        console.log(result);
    });

    return database
}

module.exports = sqliteConnection
