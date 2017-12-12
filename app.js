const express = require ('express');
const bodyParser = require ('body-parser')
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const moment = require('moment');
const MongoStore = require('connect-mongo')(session);
var cookieParser = require('cookie-parser');
var app = express();
require('./MVC/models/db')



/*
///////////////////////////////////////
///////////////////////////////////////
//////////////View Engine//////////////
///////////////////////////////////////
///////////////////////////////////////
*/
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'MVC', 'views'))
/*
///////////////////////////////////////
///////////////////////////////////////
/////////////Glocal Variables//////////
///////////////////////////////////////
///////////////////////////////////////
*/
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});


/*
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
////////Middleware Section/////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
*/

/*
//////////bodyParser Middleware////////
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Express Validator MiddleWare
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value

    };
  }
}));

var maxAge = (session.cookie||{}).maxAge || 120000;
if (process.env.NODE_ENV == 'production') var dbURL = 'mongodb://localhost:27017/tristramReborn'
else var dbURL = 'mongodb://diabloadmin:rocktheboat@ds139994.mlab.com:39994/diablo'


  app.use(session({
    secret: 'diablo2',
    saveUninitialized: 'false',
    resave: 'false',
    "cookie": {
      expires: new Date(Date.now() + maxAge),
        },
    store: new MongoStore({
      url: dbURL,
      touchAfter: 24 * 3600
    })
  }));

/*
///////////////////////////////////////
///////////////////////////////////////
/////////////Static Folders////////////
///////////////////////////////////////
///////////////////////////////////////
*/
app.use(express.static(path.join(__dirname, 'MVC')))
app.use(express.static(path.join(__dirname, 'MVC', 'controllers')))
app.use(express.static(path.join(__dirname, 'MVC', 'models')))
app.use(express.static(path.join(__dirname, 'MVC', 'views')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public', 'css')))
app.use(express.static(path.join(__dirname, 'public', 'javascript')))

/*
/////////////////////////////////////////////
//////////////////////////////////////////////
/////////////Sever Configuration//////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
*/

app.listen(function(port, err){
  if (process.env.NODE_ENV == 'production') var port = 8080;
else var port = 3000;
  if (err){
    console.log('Whoops, there seems to be a problem with the connection');
  }else{
    (port, 'localhost');
  console.log('This server started on port '+ port);
}})
module.exports = app;




//REAL SERVER CONFIGURATION, SWAP OUT WHEN GOING LIVE!
// app.listen(function(port, err){
//   var port = 8080;
//   if (err){
//     console.log('Whoops, there seems to be a problem with the connection');
//   }else{
//     (8080, 'localhost');
//     console.log('Server running at http://TristramReborn:8080/');
//   console.log('This server started on port '+ port);
// }})
// module.exports = app;




/*
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////Load the Webpage////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
*/

var index = require('./routes/index');
app.use('/', index);
