/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  GET_SESSION,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  session: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSION:
      return state
        .set('loading', true)
        .set('error', false)
        .set('session', false);
    case GET_SESSION_SUCCESS:
      return state
        //.setIn(['userData', 'repositories'], action.repos) // for nested object
        .set('session', action.session)
        .set('loading', false)
    case GET_SESSION_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
