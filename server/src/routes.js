/**
 * Contains all application endpoints
 */

import PersonalityInsightsController from './controllers/PersonalityInsightsController';

export default {
  '/personality-insights': {
    get: {
      method: PersonalityInsightsController.personalityInsight,
      public: true,
    },
  },
};
