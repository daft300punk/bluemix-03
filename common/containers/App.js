import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import AppBarTitle from '../components/AppBarTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from '../components/Form';

const App = () => (
  <div>
    <AppBarTitle />
    <Form />
  </div>
);


export default connect()(App);