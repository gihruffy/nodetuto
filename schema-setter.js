'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function toLower(v){
	return v.toLowerCase();
}

const UserSchema = new Schema({
	email: { type: String, set: toLower}
});

const User = mongoose.model('User', UserSchema);
const user = new User({email: 'GIOVANNI.ARTICA@gmail.com'});

console.log(user.email);