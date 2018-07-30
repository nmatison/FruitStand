import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';

import {addOrange, addPear, addBanana, clearFruit} from './actions';

window.store = Store;
window.addOrange = addOrange;
window.addPear = addPear;
window.addBanana = addBanana;
window.clearFruit = clearFruit;

import FruitStandContainer from './components/fruit_stand_container';
import { Provider } from 'react-redux';

const App = () => {
  return (
  <Provider store={Store}>
    <FruitStandContainer/>
  </Provider>
);};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
