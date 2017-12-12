var mongoose = require('mongoose');



var subscriptionSchema = mongoose.Schema({
    name: String,
    email: String
});
module.exports = mongoose.model('subscription', subscriptionSchema);
