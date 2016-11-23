import { merge, prop } from 'ramda';
import Search from './components/Pages/Search';
import NotFound from './components/Pages/NotFound';

export default function Router(sources) {
  const { router } = sources;

  const match$ = router.define({
    '/': Search,
    '*': NotFound
  });

  const page$ = match$.map(({ path, value }) => value(merge(sources, {
    path: router.path(path)
  })));

  const vdom$ = page$.map(prop('DOM')).flatten();

  const sinks = merge(sources, { DOM: vdom$ });

  // vdom$
  //   .addListener({
  //     next: i => { console.log(i); },
  //     error: err => console.error(err),
  //     complete: () => console.log('completed')
  //   });

  return sinks;
}
