const app = require('express');
const proxy = require('express-request-proxy');
const redis = require('redis')


const redisURL = process.env.REDISCLOUD_URL || 'redis://localhost:6379'
const redisClient = redis.createClient(redisURL)


const api = app.Router();

api.get('/stocks/*', proxy({
  url: 'https:www.alphavantage.co/query?*',
  query: {
    cache: redisClient,
    cacheMaxAge: 900,
    appid: process.env.ALPHA_VANTAGE_APIKEY,
  },
}));

module.exports = api