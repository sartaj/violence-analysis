import xs from 'xstream';

function modifyState(intent) {
  const rawDataRetreived = intent.RAW_DATA_RETRIEVED
    .map(results => ({
      data: results.slice(1, results.length + 1)
    }));

  const deathCountUpdated = rawDataRetreived
    .map(state => intent.DEATH_COUNT_UPDATED
      .map(v => ({
        data: state.data.filter(result => parseInt(result.TOTAL_DEATHS, 10) >= v)
      }))).flatten();

  // const deathCountUpdated = intent.DEATH_COUNT_UPDATED
  //   .map(d => rawDataRetreived.map(state => ({
  //     data: state.data.filter(result => parseInt(result.TOTAL_DEATHS, 10) >= d)
  //   }))).flatten();

  deathCountUpdated
    .addListener({
      next: i => console.log('state listen', i),
      error: err => console.error(err),
      complete: () => console.log('completed')
    });

  return xs.merge(
    rawDataRetreived
    , deathCountUpdated
  );
}

export default function model(intent) {
  const stateModified = modifyState(intent);
  // stateModified
  //   .addListener({
  //     next: i => console.log('state listen', i),
  //     error: err => console.error(err),
  //     complete: () => console.log('completed')
  //   });
  return stateModified;
}
