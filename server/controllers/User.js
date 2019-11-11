const models = require('../models');

const User = models.User;

const getToken = (request, response) => {
  const req = request;
  const res = response;

  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };

  res.json(csrfJSON);
};

const loginPage = (req, res) => {
  res.redirect('/', { csrfToken: req.csrfToken() });
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const login = (request, response) => {
  const req = request;
  const res = response;

  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'RAWR! All fields are required' });
  }

  return User.UserModel.authenticate(username, password, (err, User) => {
    if (err || !User) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.User = User.UserModel.toAPI(User);

    return res.json({ redirect: '/maker' });
  });
};

const signup = (request, response) => {
  const req = request;
  const res = response;

  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'RAWR! All my fields are required' });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'RAWR! Passwords do on match' });
  }

  return User.UserModel.generateHash(req.body.pass, (salt, hash) => {
    const userData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    const newUser = new User.UserModel(userData);
    const savePromse = newUser.save();

    savePromse.then(() => {
      req.sesion.User = User.UserModel.toAPI(newUser);
      return res.json({ redirect: '/maker' });
    });
    savePromse.catch((err) => {
      console.log(err);
      if (err.code === 11000) return res.status(400).json({ error: 'Username already in use' });
      return res.status(400).json({ error: 'An error occurred' });
    });
  });
};

module.exports = {
  loginPage,
  login,
  logout,
  signup,
  getToken,
};
