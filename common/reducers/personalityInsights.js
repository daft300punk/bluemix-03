import * as actionTypes from '../constants';

const initialState = {
  fetching: false,
  items: [null, null],
  error: null,
  word_count: null,
  processed_language: null
}

const personalityInsights = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_INSIGHT_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        items: [null, null]
      });
    case actionTypes.FETCH_INSIGHT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        items: action.insights.items,
        word_count: action.insights.word_count,
        processed_language: action.insights.processed_language,
      });
    case actionTypes.FETCH_INSIGHT_FAILURE:
     return Object.assign({}, state, {
       fetching: false,
       error: action.error,
     });
    default: return state;
  }
};

export default personalityInsights;