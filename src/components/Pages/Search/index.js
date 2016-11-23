import { div, strong, span } from '@cycle/dom';
// import virtualize from 'snabbdom-virtualize';

import intent from '../../../intent';
import model from '../../../model';

import Filters from '../../Organism/Filters';
import Results from '../../Organism/Results';

import './index.css';

// const view = state$ => state$.map((state) => {
//   const vtree$ = virtualize(`
//     <div>
//       <div class="Filter-view">
//         ${Filters({ results: state })}
//       </div>
//       <div class="Results-view">
//         <div style="font-size:4vmin;text-align:right">
//          <strong>${state.data.length}</strong> RESULTS
//         </div>
//         ${Results({ results: state.data })}
//       </div>
//     </div>
//   `);
//   return vtree$;
// });

const view = state$ => state$.map((state) => {
  const vtree$ = div([
    div('.Filter-view', {
      style: { width: '30%', float: 'left' }
    }, [Filters({ results: state })]),
    div('.Results-view', {
      style: { width: '70%', float: 'left', paddingTop: '2vmin' }
    }, [
      div([
        div('.Results-count', [
          state.data.length > 0 ? strong(state.data.length) : strong('0'),
          span(' Results')
        ]),
        ...Results({ results: state.data })
      ])
    ])
  ]);
  return vtree$;
});

export default sources => ({
  DOM: view(model(intent(sources)))
});
