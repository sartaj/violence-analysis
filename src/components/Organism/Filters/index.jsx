import { html } from 'snabbdom-jsx';

// import Slider from '../../Molecules/Slider';
import './index.css';

const titleStyle = {
  fontSize: '1.5rem',
  color: 'rgba(0,0,0,0.6)'
};

const filtersContainerStyle = {
  padding: '2vmin'
};

export default({ results }) => (
  <div id="filters" className="Filter-container" >
    <h2 className="Filter-title" >Minimum Deaths</h2>
    <input
      className="Filter-input"
      id="FilterMinDeaths"
      type="number"
      min="0"
      max="1000"
      name="min-deaths"
      value="0"
    />
    {/* <Slider /> */}
  </div>
);
