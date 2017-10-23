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
module.exports.homepage = function(req, res, next){

articles.find(function (error, docs){
     res.render('index', {
       articles: docs,
       moment: moment
     });

  }).sort({ date: -1 }).limit(3);

  console.log('GET Homepage')
};
