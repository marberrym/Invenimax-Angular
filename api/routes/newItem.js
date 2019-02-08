const db = require('../database');
const jwt = require('jsonwebtoken');

let newItem = (req, res) => {

    let token = jwt.decode(req.headers.token);
    let body = req.body;
    let locID = req.params.loc;
    let surplus = body.quantity - body.par; 

    console.log("suplus is" + surplus);
    
    db.none(
        `with inserted as(
            INSERT into inventory
            (user_id, location_id, item, description, par)
            VALUES
            ($1, $2, $3, $4, $5) returning id
        )
        INSERT into inven_bridge 
        (user_id, location_id, item_id, quantity, surplus)
        SELECT
        $1, $2, inserted.id, $6, $7 from inserted
        `, [token.id, locID, body.item, body.description, body.par, body.quantity, surplus]
    )
    .then(data => {
        res.send({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.send({status: 'failure'})
    })
}

module.exports = newItem;