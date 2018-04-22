/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_API_URL } from 'containers/App/constants';
import { GET_SESSION } from './constants';
import { getSessionSuccess, getSessionFailure } from './actions';

import request from 'utils/request';
//import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getSessionData() {
  // Select username from store
  const code = '6173-7353-8939-2018';
  const societe = 1;
  const requestURL = `${BASE_API_URL}/api?code=${code}&object=session&societe=${societe}`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, { 
                  headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin':'*',
                  },
                  mode: "cors",
                  credentials: 'include'
                });
    console.log('getSession', response);
    yield put(getSessionSuccess(response));
  } catch (err) {
    yield put(getSessionFailure(err));
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
  yield takeLatest(GET_SESSION, getSessionData);
}
