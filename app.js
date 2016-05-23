'use strict';

require('./db/dbconfig');

const CRUD = require('./crud');

let data = {
	name : "Charmander",
	description: 'Pokemon de fogo',
	type: 'Fogo',
	attack: 100,
	defense: 50
};


let query = {name: /charmander/i};
let mod = {attack: 150};

// CRUD.create(data);
CRUD.retrieve(query);
//CRUD.update(query, mod);
//CRUD.delete(query);


