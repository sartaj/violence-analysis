import xs from 'xstream';
import { html } from 'snabbdom-jsx';

import Results from '../../Organism/Results/index.jsx'

import './index.css';

const intent = sources => ({
  rawData: sources.rawData
});

const model = action =>
  action.rawData
    .map(results => results.slice(1, results.length + 1));

const headerStyle = {
  height: '80vh',
  background: 'url(http://qrohlf.com/trianglify/images/hero.jpg)',
  backgroundPosition: '0px 0px'
  // boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.5)'
};
const titleStyle = {
  textAlign: 'left',
  paddingTop: '27vh',
  paddingLeft: '2vw',
  color: 'white',
  fontSize: '7vmin',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontFamily: 'Playfair Display'
}

const subtitleStyle = {
  textAlign: 'left',
  paddingLeft: '2vw',
  color: 'white',
  fontSize: '2.5vmin',
  fontWeight: 'bold',
  textTransform: 'uppercase'
};

const Header = () =>
  <div style={headerStyle}>
    <div style={titleStyle}>The Violence Genome Project</div>
    <div style={subtitleStyle}>Analyze and Edit a comprehensive open source dataset on terrorism</div>
  </div>
;

const Filters = () => <div>&nbsp;</div>;
const view = state => state.map(results =>
  <div>
    <Header />
    <div className="Filter-view" style={{ width: '30%', float: 'left'}}>
      <Filters />
    </div>
    <div className="Results-view" style={{ width: '70%', float: 'left'}}>
      <Results results={results} />
    </div>
  </div>
);

export default (sources) => ({
  DOM: view(model(intent(sources)))
});
