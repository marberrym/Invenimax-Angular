const db = require('../database');
const jwt = require('jsonwebtoken');

let newItemNote = (req, res) => {
    let itemID = req.params.item;
    console.log(itemID);
    console.log(req.body)

    db.none(
        `INSERT into item_notes 
        (date, item_id, note)
        VALUES
        ($1, $2, $3)`, [req.body.date, itemID, req.body.note]
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