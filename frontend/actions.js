export const ADD_FRUIT = "ADD_FRUIT";
export const CLEAR = "CLEAR";



export const addOrange = () => ({
  type: ADD_FRUIT,
  fruit: "Orange"
});

export const addPear = () => ({
  type: ADD_FRUIT,
  fruit: "Pear"
});

export const addBanana = () => ({
  type: ADD_FRUIT,
  fruit: "Banana"
});

export const clearFruit = () => ({
  type: CLEAR
});
