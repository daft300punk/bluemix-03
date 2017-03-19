export const fetchInsightApi = (handle) => {
  return new Promise(function (resolve, reject) {
    const url = '/api/personality-insights/?handle=' + handle;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
      .catch(err => reject(err));
  });
};