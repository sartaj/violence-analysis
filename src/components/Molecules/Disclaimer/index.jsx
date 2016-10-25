import { html } from 'snabbdom-jsx';

const disclaimerStyle = {
  boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
  // border: '2px dotted grey',
  width: '100%',
  // margin: '2vh',
  padding: '2vmin',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'white'
};

const blue = {
  background: 'rgb(84, 157, 199)'
};

const green = {
  background: 'rgb(89, 185, 141)'
};

const linkStyle = {
  color: 'white',
  fontWeight: 'bold',
  textDecoration: 'underline'
};

export default () =>
  <div style={{ padding: '2vmin' }}>
    <div style={Object.assign(green, disclaimerStyle)}>
      Data Status<br /><br />
      Casualities By People Who Claim Islam [60% complete]<br /><br />
      Casualities By United States Government and Allies [0% complete]<br /><br />
      Edit the <a href="https://docs.google.com/spreadsheets/d/1ZnARV43ctifkpb5M9lu13w-VO9wTGhOF-2rKZBTwQDA/edit?usp=sharing" style={linkStyle} rel="noreferrer noopener" target="_blank">data</a>.<br /><br />
    </div>
    <div style={Object.assign(blue, disclaimerStyle)}>
      We are open source.<br /><br />
      Fork Us On <a href="http://github.com/sartaj/violence-analysis" rel="noreferrer noopener" target="_blank" style={linkStyle}>GitHub.</a>
    </div>
  </div>
;
