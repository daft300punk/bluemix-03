import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import AppBarTitle from '../components/AppBarTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from '../components/Form';
import ResultList from '../components/ResultList';
import fetchInsight from '../actions';
import Loading from '../components/Loading';

const App = ({ personalityInsights, onSubmitClicked, isLoading }) => (
  <div>
    <AppBarTitle />
    <Form onSubmitClicked={onSubmitClicked}/>
    <ResultList personalityInsights={personalityInsights} />
    { isLoading && <Loading /> }
  </div>
);

const mapStateToProps = (state) => ({
  personalityInsights: state.personalityInsights.items,
  isLoading: state.personalityInsights.fetching
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitClicked: (handle) => dispatch(fetchInsight(handle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);