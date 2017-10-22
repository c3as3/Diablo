require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
const moment = require('moment');
var articles = require('../models/articles')

/*
///////////////////////////////////////
///////////////////////////////////////
//////////////pulling data//////////////
///////////////////////////////////////
///////////////////////////////////////
*/
module.exports.news = function(req, res, next){

articles.find(function (error, docs){
     res.render('news', {
       articles: docs,
       moment: moment
     });

  }).sort({ date: -1 });
console.log('News Page Loaded')
};
