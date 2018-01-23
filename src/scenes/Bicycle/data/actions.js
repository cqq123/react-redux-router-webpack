// import { fetchRequest } from '../../../../utils';
/* eslint-disable */
import { fetchRequest } from 'utils';
import json from 'data/aa.json';
/* eslint-enable */

export const ADD_ONE = 'bicycle/ADD_ONE';
export const REDUCE_ONE = 'bicycle/REDUCE_ONE';


// export const addAction = () => ({
//   type: ADD_ONE,
//   payload: fetchRequest('/base/distance', {
//     user: 111,
//     sign: 222,
//     distance: 2,
//   }),
// });

// export const reduceAction = () => ({
//   type: REDUCE_ONE,
//   payload: fetchRequest('/base/distance', {
//     user: 11,
//     sign: 22,
//     distance: 1,
//   }),
// });

export const reduceAction = () => ({
  type: REDUCE_ONE,
  payload: fetchRequest('base/distance2'),
});

export const addAction = () =>
  async (dispatch) => {
    const aa = await fetchRequest('base/distance', {
      user: 111,
      sign: 222,
      distance: 2,
    });
    dispatch({
      type: ADD_ONE,
      payload: aa,
    });
  };
