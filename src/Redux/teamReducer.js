const defaultState = {
  activeFocus: 1,
  focus: [],
  team: [],
};

const SET_ACTIVE_FOCUS = 'SET_ACTIVE_FOCUS';
const SET_FOCUS = 'SET_FOCUS';
const SET_TEAM = 'SET_TEAM';

export const teamReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_FOCUS:
      return { ...state, activeFocus: action.payload };
    case SET_FOCUS:
      return { ...state, focus: action.payload };
    case SET_TEAM:
      return { ...state, team: action.payload };
    default:
      return state;
  }
};

export const setActiveFocus = payload => ({
  type: SET_ACTIVE_FOCUS,
  payload,
});
export const setFocus = payload => ({
  type: SET_FOCUS,
  payload,
});
export const setTeam = payload => ({
  type: SET_TEAM,
  payload,
});
