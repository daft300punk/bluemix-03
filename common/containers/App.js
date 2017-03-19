import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import AppBarTitle from '../components/AppBarTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from '../components/Form';
import ResultList from '../components/ResultList';
import fetchInsight from '../actions';
import Loading from '../components/Loading';

const App = ({ personalityInsights, onSubmitClicked, isLoading, processed_language, word_count }) => (
  <div>
    <AppBarTitle />
    <Form onSubmitClicked={onSubmitClicked}/>
    <ResultList personalityInsights={personalityInsights} processed_language={processed_language} word_count={word_count}/>
    { isLoading && <Loading /> }
  </div>
);

const mapStateToProps = (state) => ({
  personalityInsights: state.personalityInsights.items[0],
  isLoading: state.personalityInsights.fetching,
  personalityConcepts: state.personalityInsights.items[1],
  word_count: state.personalityInsights.word_count,
  processed_language: state.personalityInsights.processed_language
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitClicked: (handle) => dispatch(fetchInsight(handle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);