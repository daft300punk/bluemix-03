/**
 * Contains all application endpoints
 */

import PersonalityInsightsController from './controllers/PersonalityInsightsController';
import TwitterController from './controllers/TwitterController';

export default {
  '/personality-insights': {
    get: {
      method: PersonalityInsightsController.personalityInsight,
      public: true,
    },
  },
  '/tweets': {
    get: {
      method: TwitterController.getTextFromTweets,
      public: true,
    },
  },
};
