import xs from 'xstream';
import { html } from 'snabbdom-jsx';

import Header from '../../Molecules/Header';
import Disclaimer from '../../Molecules/Disclaimer';

import Filters from '../../Organism/Filters';
import Results from '../../Organism/Results';

import './index.css';

const intent = sources => ({
  rawData: sources.rawData,
  sources
});

const model = (action) => {
  const rawDataModified = action.rawData
    .map(results => results.slice(1, results.length + 1));
    // .map(results => results.slice(0, 2))
    // .map(results => xs.fromArray(results))
    // .flatten()
    // .fold(results => results.map(result => xs.of(result)))
    // .flatten();
    // .fold((acc, results) => {
    //   return results.map(result =>
    //     acc.concat(result)
    //   );
    // }, []);

  const state$ = xs.merge(xs.of(action.sources), rawDataModified);

  state$
    .addListener({
      next: i => console.log(i),
      error: err => console.error(err),
      complete: () => console.log('completed')
    });
  return state$;
};

const view = state$ => state$.map(state =>
  <div>
    <Header />
    <div className="Filter-view" style={{ width: '30%', float: 'left' }}>
      {/* <Filters results={state.results} /> */}
      <Disclaimer />
    </div>
    <div className="Results-view" style={{ width: '70%', float: 'left', paddingTop: '2vmin' }}>
      <Results results={state} />
    </div>
  </div>
);

export default sources => ({
  DOM: view(model(intent(sources)))
});
