import Results from '../../Organism/Results/index.jsx';

// import xs from 'xstream';
// import { div, nav, a } from '@cycle/dom';
//
// const makeLink = (path, label) => a({ props: { href: path }, style: { padding: '1em' } }, label);
//
// const nav$ = xs.of(nav({ style: { marginBottom: '1em' } }, [
//   makeLink('/', 'Home'),
//   makeLink('/filter', 'Filter'),
//   makeLink('/search', 'Search')
// ]));
//
// const vdom$ = xs.combine(nav$, results$)
//   .map(([navDom, resultsDom]) => div([navDom, resultsDom]));

export default (sources) => {
  const results$ = Results(sources);
  return results$;
};
