import React from 'react';

const FruitStand = ({fruits, addPear, addOrange, addBanana, clearFruit}) => (
  <div>
    <ul>
      {fruits.map((fruit, idx) => <li key={idx}> {fruit}</li>)}
    </ul>
    <button onClick={addPear}>Pear</button>
    <button onClick={addBanana}>Banana</button>
    <button onClick={addOrange}>Orange</button>
    <button onClick={clearFruit}>Clear</button>
  </div>
)

export default FruitStand;
