import model from './model.js';
import view from './view.js';

const CONTAINER_ID = '#container';
const $container = document.querySelector(CONTAINER_ID);
console.log(model);
$container.innerHTML = view(model);
