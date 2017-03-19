export const fetchInsightApi = (handle) => {
  return new Promise(function (resolve, reject) {
    const url = '/api/personality-insights/?handle=' + handle;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if(res === 255)
          throw 'Error with Twitter. Handle might not exist!';
        let personalityInsight = {
          items: {
            needs: res.needs.map((val) => ({ name: val.name, percentile: val.percentile })),
            values: res.values.map((val) => ({ name: val.name, percentile: val.percentile })),
            personality: res.personality.map((val) => ({ name: val.name, percentile: val.percentile }))
          },
          word_count: res.word_count,
          processed_language: res.processed_language
        };
        resolve(personalityInsight);
      })
      .catch(err => {console.log(err); reject(err)});
  });
};