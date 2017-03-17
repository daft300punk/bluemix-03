var Twitter = require('twitter');
import decorate from 'decorate-it';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const TwitterService = {
  getTextFromTweets,
};

decorate(TwitterService, 'TwitterService');

export default TwitterService;

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function getTextFromTweets(handle) {
  const params = { screen_name: handle };
  return new Promise(function (resolve, reject) {
    client.get('statuses/user_timeline', params, function (err, res) {
      if (err) reject(err);
      else {
        res = res.map(tweets => tweets.text).reduce((str1, str2) => (str1 + ' ' + str2));
        resolve(res);
      };
    });
  });
}

getTextFromTweets.params = ['handle'];
getTextFromTweets.schema = {
  handle: Joi.string(),
}