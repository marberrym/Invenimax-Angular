require('dotenv').config()

//NPM modules
const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

//Environemnt Variables
const secret = process.env.JWTSECRET;

//Middleware
const allowCORS = require('./middleware/allowCORS');

const app = express();

//Protect JWT Token
const protect = expressJwt({
    secret,
    getToken: (req) => req.headers.token
});

//Routes Imports
const getLocations = require('./routes/getLocations');
const signUp = require('./routes/signUp');
const logIn = require('./routes/logIn');

//App setup
app.use(bodyParser.json());
app.use(allowCORS);

//Endpoints
app.get('/locations', getLocations);

//New User
app.post('/signup', signUp);

//User Login
app.post('/login', logIn);

//Start Server
app.listen(5000);