var mongoose = require('mongoose');
require('../models/db');
var Schema = mongoose.Schema;


var subscriptionSchema = new Schema({
    name: String,
    email: String
});




// module.exports = mongoose.model ('News', newsArticleSchema)
