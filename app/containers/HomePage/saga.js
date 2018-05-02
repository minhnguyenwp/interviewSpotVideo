/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { BASE_API_URL } from 'containers/App/constants';
import { GET_SESSION, GET_QUESTION } from './constants';
import { getSessionSuccess, getSessionFailure, getQuestionFailure, getQuestionSuccess } from './actions';

import request from 'utils/request';
//import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getSessionData(action) {
  // Select username from store
  // const code = '6173-7353-8939-2018';
  // const societe = 1;
  let code = action.code;
  let societe = action.societe;
  const requestURL = `${BASE_API_URL}/centraltest/vim/videoInterview/api?code=${code}&object=session&societe=${societe}`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(getSessionSuccess(response));
  } catch (err) {
    yield put(getSessionFailure(err));
  }
}

export function* getQuestionData(action) {

  const requestURL = `${BASE_API_URL}/${action.url}`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(getQuestionSuccess(response));
  } catch (err) {
    yield put(getQuestionFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for GET_SESSION actions and calls getSessionData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([ 
    takeLatest(GET_SESSION, getSessionData),
    takeLatest(GET_QUESTION, getQuestionData),
  ]);
}
