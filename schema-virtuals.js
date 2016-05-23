'use strict';
require('./db/dbconfig');

const mongoose = require('mongoose');
const Schema = require('./schema');

Schema
	.virtual('nome.tipo')
	.get(function(){
	return this.name + ' - ' + this.type;
});

const Model = require('./model')('Pokemon', Schema);
const query = {name: /charmander/i};
const id = '57430a13408a4434105ef189';

Model.findById(id, function (err, data){
	if(err) return console.log('Erro: ', err);
	return console.log('Nome + Tipo : ', data.nome.tipo);
});