const defaultState = {
  active: 'help',
};

const SET_ACTIVE = 'SET_ACTIVE';

export const sectionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

export const setActiveAction = payload => ({ type: SET_ACTIVE, payload });
