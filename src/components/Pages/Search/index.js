import virtualize from 'snabbdom-virtualize';

import intent from '../../../intent';
import model from '../../../model';

import Filters from '../../Organism/Filters';
import Results from '../../Organism/Results';

import './index.css';

const view = state$ => state$.map((state) => {

  const bob = Results({ results: state.data });

  const vtree$ = virtualize(`
    <div>
      <div class="Filter-view">
        ${Filters({ results: state })}
      </div>
      <div class="Results-view">
        ${bob}
      </div>
    </div>
  `);
  // console.log(`%c VTREE RESULTS:  ${vtree$.children[3].children.length}`, 'font-weight: bold');
  return vtree$;
});

// const view = state$ => state$.map((state) => {
//   const vtree$ = div([
//     div([`RESULTS: ${state.data.length}`]),
//     div('.Filter-view', {
//       style: { width: '30%', float: 'left' }
//     }, [Filters({ results: state })]),
//     div('.Results-view', {
//       style: { width: '70%', float: 'left', paddingTop: '2vmin' }
//     }, Results({ results: state.data }))
//   ]);
//   return vtree$;
// });

export default sources => ({
  DOM: view(model(intent(sources)))
});
