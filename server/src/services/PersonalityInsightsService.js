import decorate from 'decorate-it';
import PersonalityInsightsV3 from 'watson-developer-cloud/personality-insights/v3';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const PersonalityInsightService = {
  getPersonalityInsights,
};

decorate(PersonalityInsightService, 'PersonalityInsightService');

export default PersonalityInsightService;

const personality_insights = new PersonalityInsightsV3({
  username: process.env.PERSONALITY_INSIGHTS_USERNAME,
  password: process.env.PERSONALITY_INSIGHTS_PASSWORD,
  version_date: '2016-10-20'
});


function getPersonalityInsights(text = '') {
  return new Promise(function (resolve, reject) {
    const params = {
      text: text,
      consumption_preferences: true,
    };
    personality_insights.profile(params, function (err, res) {
      if (err) return reject(err);
      else return resolve(res);
    });
  });
}

getPersonalityInsights.params = ['text'];
getPersonalityInsights.schema = {
  text: Joi.string(),
}