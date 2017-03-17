import TwitterService from '../services/TwitterService';

export default {
  getTextFromTweets,
};

async function getTextFromTweets(req, res) {
  try {
    const handle = req.query.handle || 'nodejs';
    let tweets = await TwitterService.getTweetsApi(handle);
    tweets = tweets.map(tweets => tweets.text);
    const tweetsText = tweets.reduce((str1, str2) => (str1 + " " + str2));
    res.send(tweetsText);
  } catch(err) {
    res.send(err);
  }
}