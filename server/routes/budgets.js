var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Budget = require('../models/budget');
var User = require('../models/user');

router.get('/', getBudgets);
/* For all subsequent methods, need to check whether the user is issuing a valid
token (JWT).  */
router.use('/', validateToken);
router.post('/', addBudget);
router.patch('/:id', updateBudget);
router.delete('/:id', deleteBudget);


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
            obj: budgets
        });
    });
}

function validateToken(req, res, next){
    //validate since this is not supported in decode method (see addBugdet jwt.decode)
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
    //Retrieve user from the token (added to the query string by the BudgetService)
    var decoded = jwt.decode(req.query.token);
    
    //find the user through the user id in the token
    User.findById(decoded.user._id, function(err, user){
        if(err){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }
        var bugdet = new Budget({
            name: req.body.name,
            date: req.body.date,
            user: user._id
        });
        bugdet.save(function(err, result){
            if(err){
                res.status(500).json({
                    title: "An error occurred",
                    error: err
                });
            }
          
            //if the resource is succesfully created, push the budget to the
            //user's budgets array
            user.budgets.push(result);
            //save this info to the user
            user.save();
            //success
            res.status(201).json({
                message: "Saved Budget",
                obj: result
            });
        });
    });

}

function updateBudget(req,res,next){
    //update the selected budget + check that the user deleting it is the one the budget belongs to
    var decoded = jwt.decode(req.query.token);

    Budget.findById(req.params.id, function(err, budget){
        if(err){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }
        //check whether the budget was found
        if(!budget){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }
        //check the user is different
        if(budget.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        //all checks passed; update the budget
        budget.name = req.body.name;
        budget.save(function(err, result){
            if(err){
                //there is an error; send a server error 500 and tranform to json to error handle in the front end
                return res.status(500).json({
                    title: "An error occurred",
                    error: err
                });
            }
            //Resource successfully created
            res.status(201).json({
                message: 'Updated Budget Name',
                obj: result
            });
        
        });
    });
}

function deleteBudget(req,res,next){
    //update the selected budget + check that the user deleting it is the one the budget belongs to
    var decoded = jwt.decode(req.query.token);

    //find budget with the id passed in the url parameters
    Budget.findById(req.params.id, function(err, budget){
        if(err){
            return res.status(500).json({
                title: "An error occurred",
                error: err
            });
        }
        //check whether the budget was found
        if(!budget){
            return res.status(500).json({
                title: "No Budget Found!",
                error: err
            });
        }
        //check the user is different
        if(budget.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        //all checks passed; delete the budget; pull this from the user's budget's array (see models/budget.js)
        budget.remove(function(err, result){
            if(err){
                //there is an error; send a server error 500 and tranform to json to error handle in the front end
                return res.status(500).json({
                    title: "An error occurred",
                    error: err
                });
            }
            //Resource successfully created
            res.status(201).json({
                message: 'Removed Budget',
                obj: result
            });
        
        });
    });


}