const controllers = require('./controllers');
const middle = require('./middleware')

const router = (app) => {
  console.log('Hit router')
  app.get('/login',  middle.requiresSecure, middle.requiresLogout, controllers.User.loginPage);
  app.post('/login', middle.requiresSecure, middle.requiresLogout, controllers.User.login);
  app.get('/logout', middle.requiresLogin, controllers.User.logout);
  app.get('/getToken', middle.requiresSecure, controllers.User.getToken);
  app.post('/signup', middle.requiresSecure, middle.requiresLogout, controllers.User.signup);
  app.get('/loadDash', middle.requiresLogin, controllers.Dashboard.dashPage);
  app.post('/makeCards', middle.requiresLogin, controllers.Dashboard.makeCards);
  app.get('/fetchUserData', middle.requiresLogin, controllers.User.fetchUserData);
  app.post('/changePwd', middle.requiresLogin, controllers.User.changePassword);
  app.get('/*', controllers.User.notFound);
}
module.exports = router;
