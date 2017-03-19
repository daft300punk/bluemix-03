import * as actionTypes from '../constants';

const initialState = {
  fetching: false,
  items: null,
  error: null,
}

const personalityInsights = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_INSIGHT_REQUEST:
      return Object.assign({}, state, {
        fetching: true
      });
    case actionTypes.FETCH_INSIGHT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        items: action.insights,
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