import { html } from 'snabbdom-jsx';

const headerStyle = {
  height: '80vh',
  background: 'url(http://qrohlf.com/trianglify/images/hero.jpg)',
  backgroundPosition: '0px 0px'
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
};

const subtitleStyle = {
  textAlign: 'left',
  paddingLeft: '2vw',
  color: 'white',
  fontSize: '2.5vmin',
  fontWeight: 'bold',
  textTransform: 'uppercase'
};


export default () =>
  <div style={headerStyle}>
    <div style={titleStyle}>The Violence Genome Project</div>
    <div style={subtitleStyle}>
      The World&apos;s Most Comprehensive Data Initiative To Understand Violence
    </div>
  </div>
;
