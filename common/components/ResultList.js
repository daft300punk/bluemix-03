import React from 'react';
import ResultItem from './ResultItem';
import Chip from 'material-ui/Chip'

const ResultList = ({ personalityInsights }) => {
  if (personalityInsights === null) return <noscript />;

  let ResultElement = [];
  let count = 0, sizeOfInsight = Object.keys(personalityInsights).length;
  for (let key in personalityInsights.items) {
    let isLast = ++count === sizeOfInsight ? true : false;
    ResultElement.push(
      <ResultItem title={key} key={key} arrayOfItem={personalityInsights.items[key]} isLast={isLast} />
    );
  }

  const styleDiv = {
    margin: '30px',
    width: '800px',
    fontFamily: 'sans-serif'
  }

  const styleChip = {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '24px'
  }

  return (
    <div style={styleDiv}>
      <h2>Results</h2>
      <div>
        <Chip style={styleChip}>Word Count: {personalityInsights.word_count}</Chip>
        <Chip style={styleChip}>Processed Language: {personalityInsights.processed_language}</Chip>
      </div>
      {ResultElement}
    </div>
  );
}

export default ResultList;