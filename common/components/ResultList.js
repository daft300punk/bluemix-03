import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({ personalityInsights }) => {
  if (personalityInsights === null) return <noscript />;

  let ResultElement = [];
  for (let key in personalityInsights) {
    ResultElement.push(
      <ResultItem title={key} key={key} arrayOfItem={personalityInsights[key]} />
    );
  }
  
  return (
    <div>
      {ResultElement}
    </div>
  );
}

export default ResultList;