const express = require('express');
const router = express.Router();
const config = require('../config.json');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

/*Creating a new user */
router.post('/', signup);
/*Logging a user in */
router.post('/login', login);

module.exports = router;

function signup(req, res, next)  {
    //Retrieve the variables from the forms in the request
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        //Password is encrypted in one-way; salt: 10
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email

    });
   
    user.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }else{
            //passing JSON data with the response
            res.status(201).json({
                message: 'User Created',
                obj: result
            })
        }
    });
}

/* Response (res) always returns to the frontend */
function login(req, res, next){
    //Find the user and identify them by the emai which is always unique
    //(mongooose unique validator in models/user.js)
    User.findOne({email: req.body.email }, function(err, user){
        if(err){
            //500 - internal server error
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        //401-unauthorized
        if(!user){
            res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        //Checking whether we get a comparable result
        //using the same hashing algorithm
        if(!bcrypt.compareSync(req.body.password, user.password)){
            res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
         //User exists and the correct password was entered
        //create a client token for future requests, using JWT (JSON Web Token)
        //generate and sign a token; store the user in the token as the payload
        //set expiration (here 1hours); secret = secret
        var token = jwt.sign({ user : user}, config.secret, {expiresIn: 3600});
        res.status(200).json({
            title: 'Successfully logged in',
            //send token to be retrieved by the auth.service and then login.component
            token: token,
            //mongoDB id attribute
            userId: user._id
        });
        
    });
}