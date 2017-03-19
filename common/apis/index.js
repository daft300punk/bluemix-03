export const fetchInsightApi = (handle) => {
  return new Promise(function(resolve, reject) {
    const url = '/api/personality-insights/?handle=' + handle;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let personalityInsight = {
          needs: res.needs.map((val) => ({ name: val.name, percentile: val.percentile })),
          values: res.values.map((val) => ({ name: val.name, percentile: val.percentile })),
          personality: res.values.map((val) => ({ name: val.name, percentile: val.percentile }))
        };
        resolve(personalityInsight);
      })
      .catch(err => reject(err));
  });
};