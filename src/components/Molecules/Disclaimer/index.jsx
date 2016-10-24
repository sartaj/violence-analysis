import { html } from 'snabbdom-jsx';

const disclaimerStyle = {
  boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
  // border: '2px dotted grey',
  width: '100%',
  margin: '2vh',
  padding: '2vmin',
  textAlign: 'center',
  textTransform: 'uppercase',
  background: 'rgb(199, 84, 87)',
  color: 'white'
};

const linkStyle = {
  color: 'white',
  fontWeight: 'bold',
  textDecoration: 'underline'
};

export default () =>
  <div style={disclaimerStyle}>
    This Project Is Currently <strong>In Beta</strong><br /><br />
    Help Contribute To <a href="https://docs.google.com/spreadsheets/d/1ZnARV43ctifkpb5M9lu13w-VO9wTGhOF-2rKZBTwQDA/edit?usp=sharing" style={linkStyle}>data</a> and <a href="http://github.com/sartaj/violence-analysis" rel="noreferrer noopener" target="_blank" style={linkStyle}>source code</a>
  </div>
;
