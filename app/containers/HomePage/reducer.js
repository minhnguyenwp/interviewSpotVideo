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
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  GET_NEW_PRACTICE,
  GET_NEW_PRACTICE_SUCCESS,
  GET_NEW_PRACTICE_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_PROGRESS,
  UPLOAD_FAILURE,
  UPLOAD_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: false,
  session: false,
  question: false,
  practice: false,
  progress: 0,
  isUploadSuccess: false,
  isUploadFailure: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSION:
      return state
        .set('error', false)
        .set('session', false)
        .set('isUploadSuccess', false)
        .set('isUploadFailure', false)
    case GET_SESSION_SUCCESS:
      return state
        //.setIn(['userData', 'repositories'], action.repos) // for nested object
        .set('session', action.session)
    case GET_SESSION_FAILURE:
      return state
        .set('error', action.error)
    case GET_QUESTION:
      return state
        .set('error', false)
        .set('question', false)
        .set('isUploadSuccess', false)
        .set('isUploadFailure', false)
    case GET_QUESTION_SUCCESS:
      return state
        //.setIn(['userData', 'repositories'], action.repos) // for nested object
        .set('question', action.question)
    case GET_QUESTION_FAILURE:
      return state
        .set('error', action.error)
    case GET_NEW_PRACTICE:
      return state
        .set('error', false)
        .set('practice', false)
        .set('isUploadSuccess', false)
        .set('isUploadFailure', false)
    case GET_NEW_PRACTICE_SUCCESS:
      return state
        //.setIn(['userData', 'repositories'], action.repos) // for nested object
        .set('practice', action.practice)
    case GET_NEW_PRACTICE_FAILURE:
      return state
        .set('error', action.error)
    case UPLOAD_REQUEST:
      return state
        .set('progress', 0)
        .set('isUploadSuccess', false)
        .set('isUploadFailure', false)
        .set('error', false)
    case UPLOAD_PROGRESS:
      return state
        .set('progress', action.progress)
        .set('isUploadSuccess', false)
        .set('isUploadFailure', false)
        .set('error', false)
    case UPLOAD_SUCCESS:
      return state
        .set('isUploadSuccess', true)
        .set('isUploadFailure', false)
        .set('error', false)
    case UPLOAD_FAILURE:
      return state
        .set('isUploadFailure', true)
        .set('isUploadSuccess', false)
        .set('error', false)
        .set('error', action.error)
    default:
      return state;
  }
}

export default homeReducer;
