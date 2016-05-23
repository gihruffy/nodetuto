const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requisitosSchema = new Schema({
	name: String
});

const Requisitos = mongoose.model('Requisitos', requisitosSchema)		;

Requisitos.schema.path('name').validate(function (value){
	return /js|html|css|angular|node|mongodb/i.test(value);
}, "Requisito({VALUE}) inválido!");

const req = new Requisitos({name: 'node'});
console.log(req.validateSync());