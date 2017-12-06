var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.about = function(req, res, next){
  res.render('about');
  console.log('About Page Loaded...')
};
module.exports.classes = function(req, res, next){
  res.render('classes');
  console.log('Classes Page Loaded')
};
module.exports.guides = function(req, res, next){
  res.render('guides');
  console.log('Guides Page Loaded')
};
module.exports.items = function(req, res, next){
  res.render('items');
  console.log('Items Page Loaded')
};
module.exports.leaderboards = function(req, res, next){
  res.render('leaderboards');
  console.log('Leaderboards Page Loaded')
};
module.exports.twitch = function(req, res, next){
  res.render('twitch',{
    twitchName: null,
    twitchIcon: null,
    description: null,
    facebook: null,
    twitter: null,
    discord: null,
    twitch: null
  });
  console.log('Twitch Page Loaded')
};
module.exports.splash = function(req, res, next){
  res.render('splash', {title: 'Subscribe Now',success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  console.log('Splash Page Loaded')
};
