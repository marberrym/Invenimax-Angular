const jwt = require('jsonwebtoken');
const db = require('../database');

let removeItem = (req, res) => {
    console.log("Delete Item");
    let itemID = req.params.item
    console.log(itemID);

    db.none(
        `DELETE from inven_bridge WHERE item_id=$1;
        DELETE from transactions WHERE inventory_id=$1;
        DELETE from inventory WHERE id=$1;`, [itemID]
    )
    .then(data => {
        res.send({status: "success"})
    })
    .catch(err => {
        console.log(err);
        res.send({status: "error"})
    })
}

module.exports = removeItem;