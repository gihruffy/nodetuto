'use strict';
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//Objecto que será passado ao schema contendo as propriedadas para validação
let _schema = {
	nome: String,
	idade: Number
}

const pessoaSchema =  new Schema(_schema);

//Dados a ser inseridos no banco
const data = {
	nome: "Giovanni",
	idade: 27
};

//Criando um model 
//Passando a coleção que será salva e o schema para validacao
const Model = mongoose.model('pessoas', pessoaSchema );
//Instanciando o model com os dados
const pessoa = new Model(data);	
//Salvando os dados 
pessoa.save(function (err, data){
	if(err) return console.log('Erro: ', err);
	console.log('Inseriu: ', data)
});

module.exports = pessoaSchema;
