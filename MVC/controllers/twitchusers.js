var router = require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');



var twitchUserSchema = mongoose.Schema({
    username: String,
    twitter: String,
    discord: String,
    description: String
});

var TwitchUsers = mongoose.model('TwitchUsers', twitchUserSchema);


module.exports.twitchUsersSubmitted = function(req,res)   {


      req.checkBody('username', 'Please enter a Twitch username.').notEmpty();
      req.checkBody('twitter', 'Please enter a twitter username.').notEmpty();
      req.checkBody('discord', 'Please type a Discord username.').notEmpty();
      req.checkBody('description', 'Please enter a description.').notEmpty();

      var errors = req.validationErrors();

      if (errors) {


      console.log('errors on form ')
      } else{

        var newUser = {
            username: req.body.username,
            twitter: req.body.twitter,
            discord: req.body.discord,
            description: req.body.description
          }

      console.log('New Twitch User Submitted');

      var sendUser = new TwitchUsers(newUser);

        sendUser.save(function(err, result){
          if(err){
            console.log(err);
            res.render('twitchUsers');
            console.log('User Injection page loaded')
          }else{
            res.render('twitchUsers');
            console.log('User saved in MongoDB/twitchUsers')
          }

        })
      }
    }


module.exports.twitchUsers = function(req, res, next){

res.render('twitchUsers');
console.log('Please add your new Twitch User')

};
