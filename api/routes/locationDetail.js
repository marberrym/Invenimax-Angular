const jwt = require('jsonwebtoken');
const db = require('../database');

let locationDetail = (req, res) => {

    let token = jwt.decode(req.headers.token);

    let userID = token.id;
    let locID = req.params.loc;

    console.log(locID);
    console.log(token);
    console.log(userID);
    console.log("Path works.");

    
    let location = db.query(
        `SELECT name, address, city, state 
        FROM locations 
        WHERE locations.id=$1`, [locID]
    )
    

    let items = db.query(
        `SELECT inventory.item, inventory.description, inventory.par,
        inven_bridge.quantity, inventory.location_id, inven_bridge.item_id
        FROM inventory, inven_bridge 
        WHERE
        inventory.id = inven_bridge.item_id AND inventory.location_id=$1
        `, [locID]
    )
    
    Promise.all([location, items])
    .then(data => {
        console.log(data[0]);
        console.log(data[1]);
        res.send({
            name: data[0][0].name,
            address: data[0][0].address,
            city: data[0][0].city,
            state: data[0][0].state,
            inventory: data[1] 
        })
    })
}

module.exports = locationDetail