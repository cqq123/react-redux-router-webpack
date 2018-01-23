export const ADD_ONE = 'bus/ADD_ONE';
export const REDUCE_ONE = 'bus/REDUCE_ONE';

export const addAction = () => ({
  type: ADD_ONE,
  payload: 11,
});

export const reduceAction = () => ({
  type: REDUCE_ONE,
  payload: 11,
});
