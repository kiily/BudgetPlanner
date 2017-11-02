var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

//Mongoose transaction schema
var transactionSchema = new Schema({
    bugdetId: {type: Schema.Types.ObjectId, ref: 'Budget'},
    type: {type: Boolean, required: true},
    category: {type: String, required: true},
    payee: {type: String, required: true},
    date: {type: Date, required:true},
    amount: {type: Number, required: true}

});

//add validation
transactionSchema.plugin(mongooseUniqueValidator);
var Transaction = mongoose.model('Transaction', transactionSchema);