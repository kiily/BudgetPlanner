var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var userSchema = new Schema({
    //define the user model here
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
    //need to link this to the budgets later on
});

//Add the mongoose validator as a plugin to ensure email uniqueness
userSchema.plugin(mongooseUniqueValidator);
var User = mongoose.model('User', userSchema);

module.exports = User;