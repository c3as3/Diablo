var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.homepage = function(req, res){
  res.render('index');
  console.log('GET Homepage')
};
