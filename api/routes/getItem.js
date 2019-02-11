db = require('../database');
jwt = require('jsonwebtoken');

let getItem = (req, res) => {
    let itemID = req.params.item;
    let storeID = req.params.loc;

    let store = db.one(
        `SELECT
        name, address, city, state
        FROM locations
        WHERE
        id=$1`, [storeID]
    )
    
    let item = db.one(
        `SELECT 
        inventory.id, inventory.item, inventory.description, inventory.par,
        inven_bridge.quantity, inven_bridge.surplus 
        FROM INVENTORY 
        INNER JOIN inven_bridge
        ON
        inventory.id = inven_bridge.item_id AND inventory.id = $1`, [itemID]
    )

    let transactions = db.query(
        `SELECT * FROM transactions
        WHERE inventory_id=$1`, [itemID]
    )

    let notes = db.query(
        `SELECT * FROM item_notes
        WHERE item_id=$1`, [itemID]
    )

    Promise.all([item, transactions, notes, store])
    .then(data => {
        console.log(data);
        res.send({
            id: data[0].id,
            item: data[0].item,
            description: data[0].description,
            par: data[0].par,
            quantity: data[0].quantity,
            surplus: data[0].surplus,
            transactions: data[1],
            notes: data[2],
            store: data[3].name,
            address: data[3].address,
            city: data[3].city,
            state: data[3].state
        })
    })
    .catch(err => console.log(err))
}

module.exports = getItem;