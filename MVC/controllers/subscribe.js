require('../../routes/index.js');
var recaptcha = require('express-recaptcha');
var https = require('https');
var mongoose = require('mongoose');
require('../models/db');

var subscriptionSchema = mongoose.Schema({
    name: String,
    email: String
});

module.exports.subscribeSubmitted = function(req,res)   {
    res.render('splash');
    recaptcha.verify(req, function(error){
        if(!error){
    console.log('reCaptcha Verified');
    console.log('Message Attempted');
     req.checkBody('name', 'Your Name is a required field.').notEmpty();
     req.checkBody('email', 'Your Email is a required field.').notEmpty();
     req.checkBody("email", "Enter a valid email address.").isEmail();

     var errors = req.validationErrors();
     if (errors) {


    console.log('errors on form ')
     } else{

       var newSubscription = {
           name: req.body.name,
           email: req.body.email,
         }
     console.log('New Subscription Submitted');
     var subscription = mongoose.model('subscription', subscriptionSchema);
     var sendSubscription = new subscription(newSubscription);
       sendSubscription.save(function(err, result){
         if(err){
           console.log(err);
           res.render('splash');
           console.log('Get Splash Page')
         }else{
           console.log('Subscription saved in MongoDB')
         }

       })

     }


}
})
};
