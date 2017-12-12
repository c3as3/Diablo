require('../../routes/index.js');
var recaptcha = require('express-recaptcha');
var https = require('https');
var mongoose = require('mongoose');
require('../models/db');
module.exports = function(includeFile){
    return require('../models/subscription');
};

module.exports.subscribeSubmitted = function(req,res, next)   {
  recaptcha.verify(req, function(error, data){
  if(!error){
    console.log('Recaptcha Verified');
    console.log('Message Attempted');
    req.check('email', 'Invalid Email Address').isEmail();
    req.check('email', 'Email is a required field').notEmpty();
    req.check('name', 'Name is a required field').notEmpty();

    var errors = req.validationErrors();
    if (errors){
      req.session.errors = errors;
      req.session.success = false;
      console.log('errors on form')
    } else{
      req.session.success = true;
      var newSubscription = {
          name: req.body.name,
          email: req.body.email,
        }
    console.log('New Subscription Submitted');
    // var subscription = mongoose.model('subscription', subscriptionSchema);
    var sendSubscription = new subscription(newSubscription);
      sendSubscription.save(function(err, result){
        if(err){
          console.log(err);
      res.render('splash');
          console.log('Get Splash Page')
        }else{
          console.log('Subscription saved in MongoDB/subscriptions')
        }

      })
    }
    res.redirect('/');
  }

  else{
console.log('Recaptcha not Verified');
  }

});


};
