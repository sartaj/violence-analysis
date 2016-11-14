import { html } from 'snabbdom-jsx';

import intent from '../../../intent';
import model from '../../../model';

import Header from '../../Molecules/Header';
import Disclaimer from '../../Molecules/Disclaimer';

import Filters from '../../Organism/Filters';
import Results from '../../Organism/Results';

import './index.css';

const view = state$ => state$.map((state) => {
  const vtree$ = (
    <div>
      {/* <Header /> */}
      <div className="Filter-view" style={{ width: '30%', float: 'left' }}>
        <Filters results={state} />
        <Disclaimer />
      </div>
      <div className="Results-view" style={{ width: '70%', float: 'left', paddingTop: '2vmin' }}>
        <Results results={state.data} />
      </div>
    </div>
  );
  console.log('VTREE', vtree$);
  return vtree$;
});

export default sources => ({
  DOM: view(model(intent(sources)))
});
