const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

/*Creating a new user */
router.post('/', signup);

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
    console.log('saving');
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