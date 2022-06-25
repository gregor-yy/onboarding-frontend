const defaultState = {
  input: '',
  docs: [],
};

const SET_INPUT_HELP = 'SET_INPUT_HELP';
const SET_DOCS = 'SET_DOCS';

export const helpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INPUT_HELP:
      return { ...state, input: action.payload };
    case SET_DOCS:
      return { ...state, docs: action.payload };
    default:
      return state;
  }
};

export const setInputHelp = payload => ({
  type: SET_INPUT_HELP,
  payload,
});
export const setDocs = payload => ({
  type: SET_DOCS,
  payload,
});
