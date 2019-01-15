const db = require('../database');

let getLocations = () => {
    db.query(`SELECT * from LOCATIONS`)
    .catch(err => console.log(err))
}

module.exports = getLocations