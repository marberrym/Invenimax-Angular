require('dotenv').config()
const pg = require('pg-promise')();
const db_user = process.env.DB_USER
const dbConfig = `postgres://${db_user}@localhost:5432/inventorymgmt`;
const db = pg(dbConfig);

console.log(db_user);

module.exports = db;