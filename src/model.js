import data from './data.js';

const actedAlone = data
  .filter(item => item.ACTED_ALONE_OR_IN_GROUP === 'Group');

const model = {
  actedAlone: actedAlone
};

export default model
