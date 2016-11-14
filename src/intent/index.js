import xs from 'xstream';

export default (sources) => {
  return {
    RAW_DATA_RETRIEVED: sources.rawData,
    DEATH_COUNT_UPDATED: sources.DOM.select('#FilterMinDeaths')
      .events('change')
      .map(e => e.target.value)
  };
};
