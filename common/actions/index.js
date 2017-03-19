import * as ActionTypes from '../constants';
import {fetchInsightApi} from '../apis';

const fetchInsightRequest = (handle) => ({
  type: ActionTypes.FETCH_INSIGHT_REQUEST,
  handle: handle
});

const fetchInsightSuccess = (result) => ({
  type: ActionTypes.FETCH_INSIGHT_SUCCESS,
  insights: result,
});

const fetchInsightFailure = (error) => ({
  type: ActionTypes.FETCH_INSIGHT_FAILURE,
  error: error,
});

const fetchInsight = (handle) => (dispatch) => {
  dispatch(fetchInsightRequest(handle));
  fetchInsightApi(handle)
  .then(insight => dispatch(fetchInsightSuccess(insight)))
  .catch(err => dispatch(fetchInsightFailure(err)));
}

export default fetchInsight;