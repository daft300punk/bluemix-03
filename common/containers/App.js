import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import AppBarTitle from '../components/AppBarTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from '../components/Form';
import ResultList from '../components/ResultList';
import fetchInsight from '../actions';

const App = ({ personalityInsights, onSubmitClicked }) => (
  <div>
    <AppBarTitle />
    <Form onSubmitClicked={onSubmitClicked}/>
    <ResultList personalityInsights={personalityInsights} />
  </div>
);

const mapStateToProps = (state) => ({
  personalityInsights: state.personalityInsights.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitClicked: (handle) => dispatch(fetchInsight(handle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);