import decorate from 'decorate-it';
import NaturalLanguageUnderStandingV1 from 'watson-developer-cloud/natural-language-understanding/v1';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const NaturalLanguageService = {
  getLanguageUnderstanding,
}

decorate(NaturalLanguageService, 'NaturalLanguageService');

export default NaturalLanguageService;

const natural_language_understanding = new NaturalLanguageUnderStandingV1({
  username: process.env.NATURAL_LANGUAGE_UNDERSTANDING_USERNAME,
  password: process.env.NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD,
  version_date: '2017-02-27'
});

function getLanguageUnderstanding(text = '') {
  const params = {
    text: text,
    features: {
      entities: {
        'sentiment': true,
        'emotion': true,
        'limit': 5,
      }
    }
  };
  return new Promise(function(resolve, reject) {
    natural_language_understanding.analyze(params, function(err, res) {
      if(err) reject(err);
      else resolve(res);
    })
  });
}

getLanguageUnderstanding.params = ['text'];
getLanguageUnderstanding.schema = {
  text: Joi.string(),
}