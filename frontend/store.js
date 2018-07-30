// import { createStore } from 'redux';
// import reducer from './reducer.js';
// import { addOrange, addApple, addPlum, addPear } from './actions.js';
//
// const store = createStore(reducer); // instantiate app's store with app's reducer
//
// // put store and actions on the window
// window.store = store;
// window.addOrange = addOrange;
// window.addApple = addApple;
// window.addPlum = addPlum;
// window.addPear = addPear;

import { createStore } from 'redux';
import reducer from './reducer.js';

const Store = createStore(reducer);

export default Store;
