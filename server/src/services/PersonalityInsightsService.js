import decorate from 'decorate-it';
import PersonalityInsightsV3 from 'watson-developer-cloud/personality-insights/v3';
import dotenv from 'dotenv';

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


const params = {
  content_items: require('./profile.json').contentItems,
  consumption_preferences: true,
};

function getPersonalityInsights() {
  return new Promise(function(resolve, reject) {
    personality_insights.profile(params, function(err, res) {
      if(err) return reject(err);
      else return resolve(res);
    });
  });
}

getPersonalityInsights.schema = {
  
}