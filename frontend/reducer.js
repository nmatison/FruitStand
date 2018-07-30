// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_FRUIT':
//       return [
//         ...state,
//         action.fruit
//       ];
//     default:
//       return state;
//   }
// };
//
// export default reducer;

import { ADD_FRUIT, CLEAR } from "./actions";

const _defaultState = {
  fruits: []
};

const reducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case ADD_FRUIT:
      return {
      fruits: [...oldState.fruits, action.fruit]
    };
    case CLEAR:
      return _defaultState;
      default:
        return oldState;
  }
};

export default reducer;
