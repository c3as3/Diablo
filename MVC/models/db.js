var mongoose = require('mongoose');
var gracefulShutdown;
var Promise = require("bluebird");
var dbURI = 'mongodb://cesar:diggyc3as3@tristramreborn.com:28250/diablo'
//Schema creation

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
  console.log(dbURI)
}

mongoose.connect(dbURI);
mongoose.Promise = Promise;

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

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

// // assert.equal(query.exc().constructor, global.promise);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('We are connected to '+dbURI);
// });
//
//
// //for nodemon restarts
// process.once('SIGUSR2', function () {
//   gracefulShutdown('nodemon restart', function (){
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });
// //for app termintation
// process.on('SIGINT', function () {
//   gracefulShutdown('app termintation', function (){
//     process.exit(0);
//   });
// });
//
// module.exports
