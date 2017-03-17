import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Test from '../components/Test';
import React from 'react';
import AppBarTitle from '../components/AppBarTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({str}) => (
  <MuiThemeProvider>
    <AppBarTitle />
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
  str: state.test.val
});

export default connect(mapStateToProps)(App);