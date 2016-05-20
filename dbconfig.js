const mongoose = require('mongoose');
const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI);

//Mensagem ou evento executado quando conectado
mongoose.connection.on("connected", function(){
	console.log('Conectado ao banco '+ dbURI);
});

//Mensagem ou evento executado quando ocorre um erro de conexão
mongoose.connection.on('error', function(err){
	console.log('Erro de conexão no banco de dados: ' + err);
});

mongoose.connection.on("disconnected", function(){
	console.log('Desconectado do banco de dados');
});

mongoose.connection.on('open', function(){
	console.log('Abertura de Conexão do banco de dados');
});

process.on('SIGINT', function() {
	 mongoose.connection.close(function() {
	 	console.log('Fechamento de conexão do banco de dados devido finalização da aplicação');
	 	process.exit(0);
	 })
})