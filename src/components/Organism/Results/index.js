import { div, ul } from '@cycle/dom';
import hx from 'cycle-template';

const intent = sources => ({
  rawData: sources.rawData
});

const model = action =>
  action.rawData
    .map(results => results.slice(1, results.length + 1));

function eventView(act) {
  return ul(`#${act.ATTACK_ID}`,
    Object.keys(act)
      .reduce((a, b) => a.concat(hx`
        <li><strong>${b}</strong><br> ${act[b]}</li>
      `), [])
  );
}

const view = state =>
  state.map(results => div("#results", results.reduce((prev, event) =>
    prev.concat(eventView(event))
  , [])));

export default sources => ({
  DOM: view(model(intent(sources)))
});
