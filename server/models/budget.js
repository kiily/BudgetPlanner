var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var budgetSchema = new Schema({
    //maps to budget-model.ts
    name: {type: String, required: true},
    date: {type: Date, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
});

//Add validation
budgetSchema.plugin(mongooseUniqueValidator);
var Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
