import PersonalityInsightsService from '../services/PersonalityInsightsService';
import TwitterService from '../services/TwitterService';

export default {
  personalityInsight,
};

async function personalityInsight(req, res) {
  try {
    const handle = req.query['handle'] || 'nodejs';
    const text = await TwitterService.getTextFromTweets(handle);
    const insights = await PersonalityInsightsService.getPersonalityInsights(text);
    res.json(insights);
  } catch(err) {
    const err_msg = `Error Code: ${err.error_code} <br> Error Message: ${err.error_message}`;
    res.send(err);
  }
}