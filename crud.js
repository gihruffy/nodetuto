const mongoose = require('mongoose');
const Schema = require('./schema');
const Model = require('./model')('Pokemon', Schema);

const CRUD = {
	create: function(data){
		const Pokemon = new Model(data);
		Pokemon.save(function(err, data){
			if(err) return console.log('Erro: ', err);
			return console.log('Inseriu: ', data);
		});
	},
	retrieve: function (query){
		Model.find(query, function (err, data){
			if(err) return console.log('Erro: ', err);
			return console.log('Retornou: ', data);
		});
	},
	update: function (query, mod, options){
		options = options || {}
		Model.update(query, mod, options, function (err, data){
			if(err) return console.log('Erro: ', err);
			return console.log('Atualizou : ', data);
		});
	},
	delete: function(query){
		Model.remove(query, function (err, data){
			if(err) return console.log('Erro: ', err);
			return console.log('Deletou : ', data);
		});
	}
}

module.exports = CRUD;
