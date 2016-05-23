'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email){
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
}

const emailSchema = new Schema({
	email: {
		type: String,
		trim: true,
		unique: true,
		required: "Email é Obrigatório",
		validate: [validateEmail, "Preencha com um email válido"]
	}
});
const Email = mongoose.model('Email', emailSchema);
const mail =  new Email({email: 'giovanni.artica@gmail.'});

console.log(mail.validateSync());