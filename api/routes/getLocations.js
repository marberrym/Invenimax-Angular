const db = require('../database');

let getLocations = (req, res) => {
    db.query(`SELECT * from LOCATIONS`)
    .then(data => res.send({
        data
    }))
    .catch(err => console.log(err))
}

module.exports = getLocations