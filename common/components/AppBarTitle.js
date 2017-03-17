import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const AppBarTitle = () => (
  <MuiThemeProvider>
    <AppBar
      title="Topcoder Bluemix Challenge 03"
      iconStyleLeft={{
        display: 'none'
      }}
    />
  </MuiThemeProvider>
);

export default AppBarTitle;