import { html } from 'snabbdom-jsx';

import Header from '../../Molecules/Header';
import Disclaimer from '../../Molecules/Disclaimer';

import Filters from '../../Organism/Filters';
import Results from '../../Organism/Results';

import './index.css';

const intent = sources => ({
  rawData: sources.rawData
});

const model = action =>
  action.rawData
    .map(results => results.slice(1, results.length + 1));

const view = state => state.map(results =>
  <div>
    <Header />
    <div className="Filter-view" style={{ width: '30%', float: 'left' }}>
      <Filters results={results} />
      <Disclaimer />
    </div>
    <div className="Results-view" style={{ width: '70%', float: 'left', paddingTop: '2vmin' }}>
      <Results results={results} />
    </div>
  </div>
);

export default sources => ({
  DOM: view(model(intent(sources)))
});
