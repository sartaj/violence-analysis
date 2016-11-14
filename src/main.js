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
