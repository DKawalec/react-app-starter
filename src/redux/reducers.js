import { combineReducers } from 'redux';

import { NUM_UP } from './actions';

const rootReducer = combineReducers({
  example: (state = { counter: 0 }, action) => {
    switch(action.type) {
    case NUM_UP: 
      return Object.assign({}, state, {counter: state.counter+1});
    default:
      return state;
    }
  }
});

export default rootReducer;
