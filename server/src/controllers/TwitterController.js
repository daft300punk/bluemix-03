import TwitterService from '../services/TwitterService';

export default {
  getTweets,
};

async function getTweets(req, res) {
  try {
    const handle = req.query.handle || 'nodejs';
    const tweets = await TwitterService.getTweetsApi(handle);
    res.send(tweets);
  } catch(err) {
    res.send(err);
  }
}