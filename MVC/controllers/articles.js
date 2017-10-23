require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
// var newsArticleSchema = require('../models/schema', newsArticleSchema);
// var Articles = require('../models/models')

var newsArticleSchema = mongoose.Schema({
    title: String,
    author: String,
    date: { type: Date, default: Date.now },
    article: String
});
var Articles = mongoose.model('Articles', newsArticleSchema);


module.exports.articleSubmitted = function(req,res)   {
  // res.render('index');



     console.log('Article Submitted');
      req.checkBody('title', 'Title is a required field.').notEmpty();
      req.checkBody('author', 'Author is a required field.').notEmpty();
      req.checkBody('article', 'Please type an article.').notEmpty();

      var errors = req.validationErrors();
      if (errors) {


      console.log('errors on form ')
      } else{

        var newArticle = {
            title: req.body.title,
            author: req.body.author,
            article: req.body.article
          }
      console.log('New Article Submitted');

      var sendArticle = new Articles(newArticle);
        sendArticle.save(function(err, result){
          if(err){
            console.log(err);
            res.render('articleInjection');
            console.log('Article Injection page loaded')
          }else{
            res.render('articleInjection');
            console.log('Article saved in MongoDB/Articles')
          }

        })

      }
    }


module.exports.articlesForm = function(req, res, next){
    // var article = mongoose.model('Article', newsArticle)

res.render('articleInjection');
console.log('Please create your article')

};
