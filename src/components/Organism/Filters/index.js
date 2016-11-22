import virtualize from 'snabbdom-virtualize';

import Disclaimer from '../../Molecules/Disclaimer';

import './index.css';

export default () => virtualize(`
  <div>
    <div id="filters" class="Filter-container" >
      <h2 class="Filter-title" >Minimum Deaths</h2>
      <input
        class="Filter-input"
        id="FilterMinDeaths"
        type="number"
        min="0"
        max="1000"
        name="min-deaths"
        value="0"
      />
    </div>
    ${Disclaimer()}
  </div>
`);
