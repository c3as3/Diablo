var express = require('express');
var router = express.Router();
var ctrlDiablo = require('../MVC/controllers/welcome.js');


router.get('/', ctrlDiablo.homepage);

module.exports = router; 
