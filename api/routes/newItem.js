const db = require('../database');
const jwt = require('jsonwebtoken');

let newItem = (req, res) => {

    let token = jwt.decode(req.headers.token);
    let body = req.body;
    let locID = req.params.loc;

    
    db.none(
        `INSERT into inventory
        (user_id, location_id, item, description, par)
        VALUES
        ($1, $2, $3, $4, $5)`, 
        [token.id, locID, body.item, body.description, body.par]
    )
    .then(data => {
        res.send({status: 'success'})
    })
    .catch(err => {
        console.log(err);
    })
    
    console.log(token);
    console.log(locID);
    console.log(req.body);
}

module.exports = newItem;