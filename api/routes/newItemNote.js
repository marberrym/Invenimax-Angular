const db = require('../database');
const jwt = require('jsonwebtoken');
const moment = require('moment')

let newItemNote = (req, res) => {
    let itemID = req.params.item;
    let dateTime = moment(req.body.date);
    console.log(dateTime);

    db.none(
        `INSERT into item_notes 
        (date, item_id, note)
        VALUES
        ($1, $2, $3)`, [dateTime, itemID, req.body.note]
    )
    .then(data => {
        res.send({
            status: 'success'
        })
    })
    .catch(err => {
        console.log(err);
    })
    
}

module.exports = newItemNote