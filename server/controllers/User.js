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
  console.log("logout")
  req.session.destroy();
  res.redirect('/')
};

const login = (request, response) => {
  const req = request;
  const res = response;

  const username = `${req.body.username}`;
  const password = `${req.body.password}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  return User.UserModel.authenticate(username, password, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.user = User.UserModel.toAPI(user);

    return res.json({ username, id: req.session.user });
  });
};

const signup = (request, response) => {
  // console.log("controller", request.body)
  const req = request;
  const res = response;

  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.password}`;
  req.body.pass2 = `${req.body.password2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All my fields are required' });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords do on match' });
  }

  return User.UserModel.generateHash(req.body.pass, (salt, hash) => {
    const userData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    const newUser = new User.UserModel(userData);
    const savePromise = newUser.save();

    savePromise.then(() => {
      req.session.User = User.UserModel.toAPI(newUser);
      console.log("User created!")
      return res.json({ message: 'Created Successfully!' });
    });
    savePromise.catch((err) => {
      console.log(err);
      if (err.code === 11000) return res.status(400).json({ error: 'Username already in use' });
      return res.status(400).json({ error: 'An error occurred' });
    });
  });
};

const fetchUserData = (req, res) => {
  const username = req.session.user.username;

  return User.UserModel.findByUsername(username, (err, docs) => {
    if (err) {
      return res.status(400).json({ error: 'User Data could not be found' })
    }

    return res.json({ docs })
  });
}

const changePassword = (req, res) => {
  console.log(req.body)
  if (!req.body.currentPassword || !req.body.newPass || !req.body.newPass2) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  if (req.body.newPass !== req.body.newPass2) {
    return res.status(400).json({
      error: 'Passwords do not match',
    });
  }

  return User.UserModel.authenticate(req.session.user.username, req.body.currentPassword,(err, pass) => {
      if (err || !pass) {
        return res.status(401).json({
          error: 'Current Password is incorrect.',
        });
      }

      return User.UserModel.generateHash(req.body.newPass, (salt, hash) => {
        const findUser = {
          username: `${req.session.user.username}`,
        };

        const updateData = {
          password: hash,
          salt,
        }

        User.UserModel.update(findUser, updateData, (error) => {
          if (error) {
            return res.status(500).json({
              error: 'Cannot update password at the moment.',
            });
          }

          return res.status(200).json({
            message: 'Changed Successfully'
          });
        });
      });
    }
  );
};

const notFound = (req, res) => {
  console.log('404')
  res.render('404', {
    layout: 'main',
    headline: 'Oops!'

  });
}

module.exports = {
  loginPage,
  login,
  logout,
  signup,
  getToken,
  fetchUserData,
  changePassword,
  notFound
};
