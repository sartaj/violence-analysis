import virtualize from 'snabbdom-virtualize';

import Disclaimer from '../../Molecules/Disclaimer';

import './index.css';

const titleStyle = {
  fontSize: '1.5rem',
  color: 'rgba(0,0,0,0.6)'
};

const filtersContainerStyle = {
  padding: '2vmin'
};

export default({ results }) => (`
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
