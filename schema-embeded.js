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
const BlogPost = new BlogPostModel(post);
BlogPost.comments.push(comment);
BlogPost.save(function(err, data){
	if(err) return console.log('Erro: ', err);
	return console.log('Sucesso:', data)
})