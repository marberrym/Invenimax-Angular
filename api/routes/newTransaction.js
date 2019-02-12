const db = require('../database');
const jwt = require('jsonwebtoken');

let newTransction = (req, res) => {
    console.log(req.body);
    console.log(req.params.item);

    let newQuantity = req.body.prev_quantity + req.body.inven_change;
    let itemID = req.params.item;
    let body = req.body;

    console.log(newQuantity);

    let updateQuantity = db.none(
        `UPDATE inven_bridge
        SET quantity = $1, surplus = $2
        WHERE item_id = $3`, [newQuantity, body.newSurplus, itemID]
    )
    let newTransaction = db.none(
        `INSERT into transactions
        (item_id, date, prev_quantity, inven_change, note)
        VALUES
        ($1, $2, $3, $4, $5)`, 
        [itemID, body.date, body.prev_quantity, body.inven_change, body.note]
    )

    Promise.all([updateQuantity, newTransaction])
    .then(data => {
        res.send({
            status: 'success'
        })
    })
    .catch(err => console.log(err))

}

module.exports = newTransction;