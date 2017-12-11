require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
var twitchusers = require('../models/twitchusers')

/*
///////////////////////////////////////
///////////////////////////////////////
//////////////pulling data//////////////
///////////////////////////////////////
///////////////////////////////////////
*/
module.exports.twitch = function(req, res, next){

twitchusers.find(function (error, docs){
     res.render('twitch', {
       twitchusers: docs
     });

  });
console.log('Twitch Streamers Loaded')
};
