import { ADD_ONE } from './actions';

const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default: return state;
  }
};
