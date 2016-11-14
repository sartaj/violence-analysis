import { div, ul } from '@cycle/dom';
import { html } from 'snabbdom-jsx';

import './index.css';

export default({ results }) => {
  const vtree$ = results.map(act =>
    <ul id={act.ATTACK_ID} className="Result-item" key={act.ATTACK_ID}>
      <div className="cover">
        <div>{act.DATE} | {act['LOCATION ']}</div>
        <div>Casualties: {act.TOTAL_CASUALITIES}</div>
        <div>Deaths: {act.TOTAL_DEATHS}</div>
        <div>Child Deaths: {act.CHILD_DEATHS}</div>
        <div>Child Casualities: {act.CHILD_CASUALTIES}</div>
        <div>{act.PART_OF === 'IS' ? 'ISIS' : act.PART_OF}: {act.OFFICIAL_OR_INSPIRED}</div>
      </div>
      <div className="description">{act.DESCRIPTION}</div>
    </ul>
  );
  console.log(vtree$);

  return vtree$;
};
