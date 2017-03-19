import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Form = ({ onSubmitClicked }) => {
  let input;

  const stylePaper = {
    padding: '30px',
    width: '800px',
  };

  const styleWrap = {
    padding: '30px'
  }
  return (
    <div style={styleWrap}>
      <Paper zDepth={1} style={stylePaper}>
        <p>Enter the twitter handle of Personality you want to analyze</p>
        <TextField
          hintText="Twitter hanlde"
          required
          type="text"
          underlineShow={true}
          name="handle"
          value={input}
          onChange={(e) => { input = e.target.value }}
        />
        <br />
        <RaisedButton label="Submit" primary={true} onClick={() => onSubmitClicked(input)} />
      </Paper>
    </div>
  );
};


export default Form;