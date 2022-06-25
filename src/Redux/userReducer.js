const defaultState = {
  auth: false,
  me: '',
};

const LOGIN_USER = 'LOGIN_USER';
const SET_USER = 'SET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, auth: true };
    case SET_USER:
      return { ...state, me: action.payload };
    case LOGOUT_USER:
      return { ...state, auth: false, me: '' };
    default:
      return state;
  }
};

export const loginUserAction = () => ({ type: LOGIN_USER });
export const setUserAction = payload => ({ type: SET_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
