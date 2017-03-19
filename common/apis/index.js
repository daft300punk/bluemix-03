export const fetchInsightApi = (handle) => {
  return new Promise(function (resolve, reject) {
    const url = '/api/personality-insights/?handle=' + handle;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res === 255)
          throw 'Error with Twitter. Handle might not exist!';
        let personalityInsight = {
          items: [
            {
              needs: res[0].needs.map((val) => ({ name: val.name, percentile: val.percentile })),
              values: res[0].values.map((val) => ({ name: val.name, percentile: val.percentile })),
              personality: res[0].personality.map((val) => ({ name: val.name, percentile: val.percentile }))
            },
            {
              entities: res[1].entities
            }
          ],
          word_count: res[0].word_count,
          processed_language: res[0].processed_language
        };
        console.log('api', personalityInsight);
        resolve(personalityInsight);
      })
      .catch(err => { console.log(err); reject(err) });
  });
};