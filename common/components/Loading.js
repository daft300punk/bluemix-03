import  React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styleDiv = {
  padding: '30px'
}
const Loading = () => (
  <div style={styleDiv}>
    <CircularProgress />
  </div>
);

export default Loading;