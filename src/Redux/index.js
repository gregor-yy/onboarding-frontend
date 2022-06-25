import { createStore, combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';
import { rocketReducer } from './rocketReducer';
import { sectionsReducer } from './sectionsReducer';
import { helpReducer } from './helpReducer';
import { mapReducer } from './mapReducer';
import { teamReducer } from './teamReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
  track: trackReducer,
  rocket: rocketReducer,
  sections: sectionsReducer,
  help: helpReducer,
  map: mapReducer,
  team: teamReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
