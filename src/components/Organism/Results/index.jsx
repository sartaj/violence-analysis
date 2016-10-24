import { div, ul } from '@cycle/dom';
import { html } from 'snabbdom-jsx';

const intent = sources => ({
  rawData: sources.rawData
});

const model = action =>
  action.rawData
    .map(results => results.slice(1, results.length + 1));

const view = state => state.map(results =>
  <div id="results">
    {results.map(act =>
      <ul id="#{act.ATTACK_ID}">
        <div>{act.DATE} | {act['LOCATION ']}</div>
        <div>Casualties: {act.TOTAL_CASUALITIES}</div>
        <div>Deaths: {act.TOTAL_DEATHS}</div>
        <div>Child Deaths: {act.CHILD_DEATHS}</div>
        <div>Child Casualities: {act.CHILD_CASUALTIES}</div>
        <div>{act.PART_OF === 'IS' ? 'ISIS' : act.PART_OF}: {act.OFFICIAL_OR_INSPIRED}</div>
        <div className="description">{act.DESCRIPTION}</div>
      </ul>
    )}
    Hello World
  </div>
);

export default sources => ({
  DOM: view(model(intent(sources)))
});
