/*
  This is the root component of the the system,
  where the global model, view, and interactions live.

  ## Architecture - Cycle-React
  The core framework used here is [cycle-react](https://github.com/pH200/cycle-react), a take on
  Cycle.js using React as a view. The primary flow is model-view-intent.

  _From [Andre Staltz, creator of MVI](http://staltz.com/unidirectional-user-interface-architectures.html)_
  > Introduced as a fully reactive unidirectional architecture based on RxJS Observables,
  > Model-View-Intent is the primary architectural pattern in the framework Cycle.js.
  > The Observable event stream is a primitive used everywhere, and functions over
  > Observables are pieces of the architecture.
  >
  > Parts:
  >
  > * Intent: function from Observable of user events to Observable of “actions”
  > * Model: function from Observable of actions to Observable of state
  > * View: function from Observable of state to Observable of rendering
  > ** Rendering Element: subsection of the rendering which is in itself a UI program. Is optional.
  > ** May be implemented as MVI, or as a Web Component, or any rendering of a driver
  >    (such as local storage).
  >
  > <img src="http://staltz.com/img/mvi-unidir-ui-arch.jpg" style="width:100%">
*/


import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import { createHistory } from 'history';
import { makeRouterDriver } from 'cyclic-router';
import switchPath from 'switch-path';

import rawDataDriver from './drivers/rawDataDriver';

import Router from './router';

function Main(sources) {
  const router = Router({ ...sources });
  return {
    DOM: router.DOM,
    rawData: sources.rawData
  };
}

const drivers = {
  DOM: makeDOMDriver('#root'),
  router: makeRouterDriver(createHistory(), switchPath),
  rawData: rawDataDriver
};

run(Main, drivers);
