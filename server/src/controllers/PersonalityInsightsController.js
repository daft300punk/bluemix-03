import PersonalityInsightsService from '../services/PersonalityInsightsService';

export default {
  personalityInsight,
};

async function personalityInsight(req, res) {
  try {
    const insights = await PersonalityInsightsService.getPersonalityInsights();
    res.send(insights);
  } catch(err) {
    const err_msg = `Error Code: ${err.error_code} <br> Error Message: ${err.error_message}`;
    res.send(err);
  }
}