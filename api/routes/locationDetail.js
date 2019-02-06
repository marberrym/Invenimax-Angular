const jwt = require('jsonwebtoken');
const db = require('../database');

let locationDetail = (req, res) => {

    let token = jwt.decode(req.headers.token);

    let userID = token.id;
    let locID = req.params.loc;

    console.log(locID);
    console.log(token);
    console.log(userID);
    console.log("Path works.");

    
    db.query(
        `SELECT name, address, city, state 
        FROM locations 
        WHERE locations.id=$1`, [locID])
    .then(res => {
        console.log(res);
    })
    
    db.query(
        `SELECT * FROM inventory WHERE location_id = $1`, [locID]
    )
    .then(res => {
        console.log(res);
        
        console.log(responseObject);
    })
}

module.exports = locationDetail