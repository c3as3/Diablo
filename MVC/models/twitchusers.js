var mongoose = require('mongoose');

var twitchUserSchema = mongoose.Schema({
    username: String,
    twitter: String,
    discord: String,
    description: String
});
module.exports = mongoose.model('twitchusers', twitchUserSchema);
