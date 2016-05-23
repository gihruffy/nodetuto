'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const name = require('./fields-name');
const description = require('./fields-description');
const type = require('./fields-type');
const attack = require('./fields-attack');
const defense = require('./fields-defense');
const created_at = require('./fields-created_at');

//Objecto que será passado ao schema contendo as propriedadas para validação
let _schema = {
	name,
	description,
	type,
	attack,
	defense,
	created_at
}

const pokemonSchema =  new Schema(_schema);

module.exports =  pokemonSchema;




