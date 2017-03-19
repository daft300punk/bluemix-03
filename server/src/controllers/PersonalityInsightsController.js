import PersonalityInsightsService from '../services/PersonalityInsightsService';
import TwitterService from '../services/TwitterService';
import NaturalLanguageService from '../services/NaturalLanguageService';

export default {
  personalityInsight,
};

async function personalityInsight(req, res) {
  try {
    const handle = req.query['handle'] || 'nodejs';
    const text = await TwitterService.getTextFromTweets(handle);
    let arrPromise = [
      PersonalityInsightsService.getPersonalityInsights(text),
      NaturalLanguageService.getLanguageUnderstanding(text)
    ];
    Promise.all(arrPromise)
    .then(result => res.json(result))
    .catch(err => {throw err});
  } catch(err) {
    const err_msg = `Error Code: ${err.error_code} <br> Error Message: ${err.error_message}`;
    res.json(err);
  }
}