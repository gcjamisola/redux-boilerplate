import { root as actionTypes } from './actionTypes';

const selectUser = (user) => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: USER_SELECTED,
  //       payload: user
  //     })
  //   }, 2000);
  // }
  return {
    type: actionTypes.user.USER_SELECTED,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, 2000)
    })
  }
}

export default selectUser;