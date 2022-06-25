const defaultState = {
  open: false,
  start_ready: false,
  start: false,
};

const OPEN_BLOCK = 'OPEN_BLOCK';
const SET_START_READY = 'SET_START_READY';
const SET_START = 'SET_START';

export const rocketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_BLOCK:
      return { ...state, open: action.payload };
    case SET_START_READY:
      return { ...state, start_ready: action.payload };
    case SET_START:
      return { ...state, start: action.payload };
    default:
      return state;
  }
};

export const setOpenAction = payload => ({ type: OPEN_BLOCK, payload });
export const setStartReadyAction = payload => ({
  type: SET_START_READY,
  payload,
});
export const setStartAction = payload => ({ type: SET_START, payload });
