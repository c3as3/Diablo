var express = require('express');
var router = express.Router();
var recaptcha = require('express-recaptcha')
var ctrlDiabloPages = require('../MVC/controllers/welcome.js');
var ctrlMessage = require('../MVC/controllers/messages.js');

//ReCaptcha MiddleWare
recaptcha.init('6LdQHTEUAAAAAEck5dN_0xuNI97DTZw9YKhPYrx2', '6LdQHTEUAAAAAJBSZRxCsHavkmIcFkn8PuXadE0c');
verify = function (req, res, next){
  self.verify(req,function(error){
    req.recaptcha = {error:error};
    next();
  });
}

router.get('/', ctrlDiabloPages.homepage);
router.get('/messages', ctrlMessage.messages);
router.post('/', ctrlMessage.messageSubmitted);

module.exports = router;
