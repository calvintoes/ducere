require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const csrf = require('csurf');
const redis = require('redis');
const expressHandlebars = require('express-handlebars');
const api = require('./api');


const port = process.env.PORT || process.env.NODE_PORT || 5000;

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/Ducere';

mongoose.connect(dbURL, (err) => {
  if (err) {
    console.log('Could not connect to database');
    throw err;
  }
});

let redisURL = {
  hostname: `${process.env.LOCAL_REDISCLOUD_URL}`,
  port: `${process.env.LOCAL_REDIS_PORT}`,
};

let redisPass = `${process.env.LOCAL_REDIS_PWD}`;

if (process.env.REDISCLOUD_URL) {
  redisURL = url.parse(process.env.REDISCLOUD_URL);
  redisPass = redisURL.auth.split(':')[1];
}

let redisClient = redis.createClient({
  port: redisURL.port,
  host: redisURL.hostname,
  password: redisPass
});

const router = require('./router.js');

const app = express();
app.use('/assets', express.static(path.resolve(`${__dirname}/../public/`)));
app.use(favicon(`${__dirname}/../public/favicon.ico`));
app.use(express.json({
  type: ['application/json', 'text/plain']
}))
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars')
app.disable('x-powered-by');

app.use(compression());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(session({
  key: 'sessionid',
  store: new RedisStore({
    client: redisClient,
    // host: redisURL.hostname,
    // port: redisURL.port,
    // pass: redisPass,
  }),
  secret: 'ducere',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
  },
}));
app.use(cookieParser());

app.use(csrf());
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  console.log('Missing CSRF token');
  return false;
});

app.use('/api', api);

router(app);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});

