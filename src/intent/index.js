import xs from 'xstream';

export default (sources) => {
  const filterMinDeathsEl$ = sources.DOM.select('#FilterMinDeaths');
  return {
    RAW_DATA_RETRIEVED: sources.rawData,
    DEATH_COUNT_UPDATED: xs.merge(
      filterMinDeathsEl$.events('mouseup'),
      filterMinDeathsEl$.events('keyup'),
      filterMinDeathsEl$.events('keydown')
    ).map(e => e.target.value)
  };
};
