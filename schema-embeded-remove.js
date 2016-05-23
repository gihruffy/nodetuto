'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

const post  = {
	title: 'Primeiro Post',
	body: 'POST INICIAL EEEEEEEEEEEE',
	date: Date.now()
}

const comment = {
	title: 'comentei aqui',
	body: 'Está comentado aqui',
	date: Date.now()
}

const CommentSchema = new Schema({
	title: String,
	body: String,
	date: Date
});

const BlogPostSchema = new Schema({
	title: {type: String},
	body: String,
	comments: [CommentSchema]
});

const BlogPostModel =  mongoose.model('BlogPost', BlogPostSchema);
let id =  '574393402906004407b4cb';
let comment_id = "574393402906004407b4cb73"

// BlogPostModel.findById(id, function(err, post){
// 	if(err) return console.log('Erro: ', err);
// 	console.log('posts comments: ', post.comments)
// 	post.comments[0].remove();
// 	post.save(function(err, data){
// 		if(err) return console.log('Erro: ', err);
// 		return console.log('Sucesso:', data)
// 	})
// })

BlogPostModel.findById(id,function(err, post){
	if(err) return console.log('Erro: ', err);
	console.log('Comentario ID' , post.comments.id(comment_id));
})