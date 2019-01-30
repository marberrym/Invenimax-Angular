require('dotenv').config();
const db = require('../database');
const jwt = require('jsonwebtoken');


let logIn = (req, res) => {
    let data = req.body;
    let secret = process.env.JWTSECRET;

    console.log(secret);
    console.log(data);

    db.one(`SELECT id, name FROM users WHERE users.email = $1 AND users.password = $2`, [data.email, data.password])
    .then(data => {
        let token = jwt.sign(data, secret, {expiresIn: '7d'});
        console.log(data);
        console.log(token);
        res.send({
            status: 'success',
            token: token
        })
    })
    .catch(err => {
        console.log(err);
        res.send({
            status: 'error',
            name: err.name
        })
    })
        
    
    
}

module.exports = logIn