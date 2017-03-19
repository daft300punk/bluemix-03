import React from 'react';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';



const ResultItem = ({ title, arrayOfItem }) => {

  const styleSlider = {
    marginBottom: '-40px',
    marginTop: '-20px'
  }
  const styleSpan = {
    fontSize: '12px'
  }
  const stylePaper = {
    padding: '5px 30px 40px 30px',
    width: '250px',
    display: 'inline-block',
    marginRight: '20px'
  };

  return (
    <Paper zDepth={1} style={stylePaper}>
      <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
      {arrayOfItem.slice(0, 5).map((item, index) => (
        <div>
          <span style={styleSpan}>{item.name + ' => ' + item.percentile.toFixed(2)}</span>
          <Slider disabled={true} value={item.percentile.toFixed(2)} style={styleSlider} />
        </div>
      ))}
    </Paper>
  );
};

export default ResultItem;