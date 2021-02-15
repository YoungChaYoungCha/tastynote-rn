import {act} from 'react-test-renderer';

const REGISTER_USER_INFO = 'userInfo/REGISTER_USER_INFO';

export const registerUserInfo = (userInfo) => async (dispatch, getState) => {
  setTimeout(() => {}, 3000);
  //   const res = await fetch(SERVER_DOMAIN + 'api/auth/register/', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userInfo),
  //   });
  //   const registerdUserInfo = await res.json();
  dispatch({type: REGISTER_USER_INFO, userInfo: userInfo});
};

const initialState = {
  isLogin: false,
};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_INFO:
      console.log(action.userInfo);
      return {
        ...state,
        userInfo: action.userInfo,
      };

    default:
      return state;
  }
}
