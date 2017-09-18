var mongoose = require('mongoose');
var Promise = require("bluebird");
var gracefulShutdown;
var dbURI = 'mongodb://diabloadmin:rocktheboat@ds139994.mlab.com:39994/diablo'
//Schema creation



mongoose.connect(dbURI);
mongoose.Promise = Promise;

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
  console.log(dbURI)
}
// assert.equal(query.exc().constructor, global.promise);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to '+dbURI);
});


//for nodemon restarts
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function (){
    process.kill(process.pid, 'SIGUSR2');
  });
});
//for app termintation
process.on('SIGINT', function () {
  gracefulShutdown('app termintation', function (){
    process.exit(0);
  });
});

module.exports
