var mongoose = require('mongoose');

var newsArticleSchema = mongoose.Schema({
    title: String,
    author: String,
    date: { type: Date, default: Date.now },
    article: String
});
module.exports = mongoose.model('articles', newsArticleSchema);
