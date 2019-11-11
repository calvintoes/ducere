const controllers = require('./controllers');

const router = (app) => {
  console.log('Hit router')
  app.get('/login',  controllers.User.loginPage);
  app.post('/login',  controllers.User.login);};

module.exports = router;
