import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const stylePaper = {
  padding: '30px',
  width: '800px',
};

const styleWrap = {
  padding: '30px'
}

const Form = () => (
  <div style={styleWrap}>
    <MuiThemeProvider>
      <Paper zDepth={1} style={stylePaper}>
        <p>Enter the twitter handle of Personality you want to analyze</p>
        <form method="get" action="/api/personality-insights" id="form">
          <TextField
            hintText="Twitter hanlde"
            required
            type="text"
            underlineShow={true}
            name="handle"
            form="form"
          />
          <br />
          <RaisedButton label="Submit" primary={true} type="Submit" />
        </form>
      </Paper>
    </MuiThemeProvider>
  </div>
);


export default Form;