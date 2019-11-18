const controllers = require('./controllers');

const router = (app) => {
  console.log('Hit router')
  app.get('/login',  controllers.User.loginPage);
  app.post('/login',  controllers.User.login);
  app.get('/getToken', controllers.User.getToken);
  app.post('/signup', controllers.User.signup);
  app.get('/loadDash', controllers.Dashboard.dashPage);
  app.post('/makeCards', controllers.Dashboard.makeCards);
}
module.exports = router;
