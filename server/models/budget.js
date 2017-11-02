var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var User = require('./user');


//Mongoose budget schema
var budgetSchema = new Schema({
    //maps to budget-model.ts
    name: {type: String, required: true},
    date: {type: Date, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
});


//listen to the remove event to ensure that once deleted, a budget is also removed from the array of budgets
//attached to the user in models/user.js, can access the budget being deleted with the callback function
budgetSchema.post('remove', function(budget){
    //find the user
    User.findById(budget.user, function(err, user){
        //update the budgets array
        user.budgets.pull(budget);
        //save the changes
        user.save();
    });
});

//Add validation
budgetSchema.plugin(mongooseUniqueValidator);
var Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
