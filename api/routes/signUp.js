const db = require('../database');

let signUp = (req, res) => {
    let data = req.body;
    console.log(req.body);
    db.none(`INSERT into users (name, email, org, password) VALUES ($1, $2, $3, $4)`, [data.name, data.email, data.org, data.pw])
    .then(res.send({status: "message received bitches"}))
    .catch(err => {
        console.log(err);
        res.send({
            status: "error",
            error: err
        })
    })
    
}

module.exports = signUp