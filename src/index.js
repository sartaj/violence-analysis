import * as dataStr from './data.js';
const data = dataStr.default;

const actedAlone = data
  .filter(item => item.ACTED_ALONE_OR_IN_GROUP === 'Group');

console.log('acted alone', actedAlone);
