'use strict';
require('./db/dbconfig');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	title: String,
	body: String,
	date: Date
});

const BlogPostSchema = new Schema({
	title: {type: String, get: apenasMaiusculas},
	body: String,
	comments: [CommentSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const post_id = '';

BlogPostModel.findById(post_id, function(err,post){
	if(err) return console.log('Erro: ', err);
	return console.log('Titulo: ', post.title);
});

