const defaultState = {
  completedStages: false,
  blocks: false,
};

const SET_COMPLETED_STAGES = 'SET_COMPLETED_STAGES';
const SET_BLOCKS = 'SET_BLOCKS';

export const trackReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COMPLETED_STAGES:
      return { ...state, completedStages: action.payload };
    case SET_BLOCKS:
      return { ...state, blocks: action.payload };
    default:
      return state;
  }
};

export const setCompletedStages = payload => ({
  type: SET_COMPLETED_STAGES,
  payload,
});
export const setTrackAction = payload => ({ type: SET_BLOCKS, payload });
