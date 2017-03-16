import decorate from 'decorate-it';
import Joi from 'joi';
import dotenv from 'dotenv';
import PersonalityInsightsV3 from 'watson-developer-cloud/PersonalityInsightsV3';

dotenv.config();

const PersonalityInsightService = {
  getPersonalityInsights,
};

decorate(PersonalityInsightService, 'PersonalityInsightsV3');

export default PersonalityInsightService;

const personality_insights = new PersonalityInsightsV3({
  username: process.env.PERSONALITY_INSIGHTS_USERNAME,
  password: process.env.PERSONALITY_INSIGHTS_PASSWORD,
  version_date: '2016-10-20'
});

var params = {
  content_items: require('./profile.json').contentItems,
  consumption_preferences: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

function getPersonalityInsights() {
  return new Promise(function(resolve, reject) {
    personality_insights.profile(params, function(err, res) {
      if(err) reject(err);
      else resolve(res => {
        console.log(res.json());
        return res;
      });
    });
  });
}

PersonalityInsightService.schema = {
  
}