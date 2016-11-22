import { div, ul } from '@cycle/dom';
// import virtualize from 'snabbdom-virtualize';
// import { html } from 'snabbdom-jsx';
import './index.css';

export default({ results }) => {

  console.time("H-TREE");
  const vtreeH = results.map(act => (
      ul(`#${act.ATTACK_ID}`, {
        attrs: {
          class: 'Result-item'
        }
      }, [
        div('.cover', [
          div(`${act.DATE} | ${act['LOCATION ']}`),
          div(`Casualties: ${act.TOTAL_CASUALITIES}`),
          div(`Deaths: ${act.TOTAL_DEATHS}`),
          div(`Child Deaths: ${act.CHILD_DEATHS}`),
          div(`Child Casualities: ${act.CHILD_CASUALTIES}`),
          div(`${act.PART_OF === 'IS' ? 'ISIS' : act.PART_OF}: ${act.OFFICIAL_OR_INSPIRED}`)
        ]),
        div('.description', [`${act.DESCRIPTION}`])
      ])
    ));
  console.timeEnd("H-TREE");

  // console.time("VIRTUALIZE-TREE");
  // const vtreeJSX = results.map(act =>
  //     <ul id={act.ATTACK_ID} className="Result-item" key={act.ATTACK_ID}>
  //       Results: {results.length}
  //       <div className="cover">
  //         <div>{act.DATE} | {act['LOCATION ']}</div>
  //         <div>Casualties: {act.TOTAL_CASUALITIES}</div>
  //         <div>Deaths: {act.TOTAL_DEATHS}</div>
  //         <div>Child Deaths: {act.CHILD_DEATHS}</div>
  //         <div>Child Casualities: {act.CHILD_CASUALTIES}</div>
  //         <div>{act.PART_OF === 'IS' ? 'ISIS' : act.PART_OF}: {act.OFFICIAL_OR_INSPIRED}</div>
  //       </div>
  //       <div className="description">{act.DESCRIPTION}</div>
  //     </ul>
  //   );
  // console.timeEnd("JSX-TREE");
  //
  // console.time("ES6-TREE");
  // const vtreeES6 = results.map(act => (`
  //   <ul id=${act.ATTACK_ID} class="Result-item">
  //     <div class="cover">
  //       <div>${act.DATE} | ${act['LOCATION ']}</div>
  //       <div>Casualties: ${act.TOTAL_CASUALITIES}</div>
  //       <div>Deaths: ${act.TOTAL_DEATHS}</div>
  //       <div>Child Deaths: ${act.CHILD_DEATHS}</div>
  //       <div>Child Casualities: ${act.CHILD_CASUALTIES}</div>
  //       <div>${act.PART_OF === 'IS' ? 'ISIS' : act.PART_OF}: ${act.OFFICIAL_OR_INSPIRED}</div>
  //     </div>
  //     <div class="description">${act.DESCRIPTION}</div>
  //   </ul>
  // `)).join('');
  // console.timeEnd("ES6-TREE");

  return vtreeH;
};
