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

const disclaimerStyle = {
  boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
  // border: '2px dotted grey',
  width: '100%',
  margin: '2vh',
  padding: '2vmin',
  textAlign: 'center',
  textTransform: 'uppercase',
  background: "rgb(199, 84, 87)",
  color: "white"
};

const linkStyle = {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'underline'
};

const Header = () =>
  <div style={headerStyle}>
    <div style={titleStyle}>The Violence Genome Project</div>
    <div style={subtitleStyle}>
      The World's Most Comprehensive Data Initiative To Understand Violence
    </div>
  </div>
;
const Disclaimer = () =>
  <div style={disclaimerStyle}>
    This Project Is Currently <strong>In Beta</strong><br /><br />
    Help Contribute To <a href="https://docs.google.com/spreadsheets/d/1ZnARV43ctifkpb5M9lu13w-VO9wTGhOF-2rKZBTwQDA/edit?usp=sharing" style={linkStyle}>data</a> and <a href="http://github.com/sartaj/violence-analysis" target="_blank" style={linkStyle}>source code</a>
  </div>
;
const Filters = () => <div>&nbsp;</div>;
const view = state => state.map(results =>
  <div>
    <Header />
    <div className="Filter-view" style={{ width: '30%', float: 'left'}}>
      <Disclaimer />
      <Filters />
    </div>
    <div className="Results-view" style={{ width: '70%', float: 'left', paddingTop: '2vmin' }}>
      <Results results={results} />
    </div>
  </div>
);

export default (sources) => ({
  DOM: view(model(intent(sources)))
});
