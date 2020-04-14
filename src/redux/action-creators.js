import { NUM_UP } from './actions';

// redux-thunk is completely pointless here
// but this is just a showcase of the setup anyway
export const increaseNumber = () => {
  return dispatch => {
    dispatch(increase());
  };
};

const increase = () => ({ type: NUM_UP });
