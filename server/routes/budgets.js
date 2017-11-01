var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Budget = require('../models/budget');
var User = require('../models/user');

router.get('/', getMessages);
/* For all subsequent methods, need to check whether the user is issuing a valid
token (JWT).  */
router.use('/', validateToken);
router.post('/', addBudget);

module.exports = router;

function getBudgets(req, res, next){
    //Retrieve all budgets from MongoDB; use populate to add the user and their first name
    //to the budget data retrieved. exec ensures query execution
    Budget.find().populate('user', 'firstName').exec(function(err, budgets){
        if(err){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }
        res.status(200).json({
            title: "Sucess",
            budgetsObj: budgets
        })
    });
}

function validateToken(req, res, next){

    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            })
        }
        next();
    });
}

function addBudget(req, res, next){
    //Retrieve user from the token
}