require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
var article = require('./articles.js')

module.exports.news = function(req, res, next){
  article.find(function(req, res){

  })
res.render('news', {article: article});

console.log('News Page Loaded')


};
