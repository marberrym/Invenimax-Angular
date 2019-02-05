const jwt = require('jsonwebtoken');
const db = require('../database');

let newLocation = (req, res) => {
    let token = jwt.decode(req.headers.token);
    let id = token.id;
    let body = req.body;

    db.none(`INSERT into locations 
    (user_id, name, address, city, state) 
    VALUES
    ($1, $2, $3, $4, $5)`, [id, body.name, body.address, body.city, body.state])
    .then(data => {
        res.send({status: 'success'})
    })
    .catch(err => {
        console.log(err);
    })

    console.log(token);
    console.log(body);
    console.log("hello");
}

module.exports = newLocation;