import { html } from 'snabbdom-jsx';

// import Slider from '../../Molecules/Slider';
// import './index.css';

const titleStyle = {
  fontSize: '1.5rem',
  color: 'rgba(0,0,0,0.6)'
};

const filtersContainerStyle = {
  padding: '2vmin'
};

export default({ results }) => (
  <div id="filters" style={filtersContainerStyle} >
    <h2 style={titleStyle} >By Casualties</h2>
    {/* <Slider /> */}
  </div>
);
