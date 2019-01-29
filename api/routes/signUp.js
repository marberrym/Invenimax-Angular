const db = require('../database');

let signUp = (req, res) => {
    console.log(req);
    res.send({status: "message received bitches"})
}

module.exports = signUp