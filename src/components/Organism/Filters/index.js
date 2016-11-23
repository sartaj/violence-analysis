import virtualize from 'snabbdom-virtualize';

import Disclaimer from '../../Molecules/Disclaimer';

import './multirange.js';

import './index.css';

// function getVals(){
//   // Get slider values
//   var parent = this.parentNode;
//   var slides = parent.getElementsByTagName("input");
//     var slide1 = parseFloat( slides[0].value );
//     var slide2 = parseFloat( slides[1].value );
//   // Neither slider will clip the other, so make sure we determine which is larger
//   if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
//
//   var displayElement = parent.getElementsByClassName("rangeValues")[0];
//       displayElement.innerHTML = slide1 + " - " + slide2;
// }
//
// // window.onload = function(){
// //   // Initialize Sliders
// //   var sliderSections = document.getElementsByClassName('range-slider');
// //       for (let x = 0; x < sliderSections.length; x++ ){
// //         let sliders = sliderSections[x].getElementsByTagName('input');
// //         for (let y = 0; y < sliders.length; y + 1) {
// //           if (sliders[y].type === 'range') {
// //             sliders[y].oninput = getVals;
// //             // Manually trigger event first time to display values
// //             sliders[y].oninput();
// //           }
// //         }
// //       }
// // }

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
