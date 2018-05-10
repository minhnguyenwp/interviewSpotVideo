/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all, takeEvery, take } from 'redux-saga/effects';
import { BASE_API_URL } from 'containers/App/constants';
import { GET_SESSION, GET_QUESTION, GET_NEW_PRACTICE, UPLOAD_REQUEST, POST_SESSION } from './constants';
import { 
          getSessionSuccess, getSessionFailure, getQuestionFailure, 
          getQuestionSuccess, getNewPracticeSuccess, getNewPracticeFailure, 
          uploadProgress, uploadSuccess, uploadFailure,
          postSessionSuccess, postSessionFailure
       } from './actions';

import request from 'utils/request';
import { createUploadFileChannel  } from 'utils/createUploadFileChannel';

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

export function* postSessionData(action) {
  const requestURL = `${BASE_API_URL}/${action.url}`;
  const data = action.data
  const opts = {
    method: 'POST',
    body: data
  }
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, opts );
    yield put(postSessionSuccess(response));
  } catch (err) {
    yield put(postSessionFailure(err));
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

export function* getNewPracticeData(action) {

  const requestURL = `${BASE_API_URL}/${action.url}`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, { method: 'POST' });
    yield put(getNewPracticeSuccess(response));
  } catch (err) {
    yield put(getNewPracticeFailure(err));
  }
}

export function* uploadFileWatcher(url, file) {
  console.log('uploadFileWatcher', url)
    const channel = yield call(createUploadFileChannel, url, file);
    while (true) {
        const { progress = 0, err, success } = yield take(channel);
        if (err) {
            yield put(uploadFailure(file, err));
            return;
        }
        if (success) {
            yield put(uploadSuccess(file));
            return;
        }
        yield put(uploadProgress(file, progress));
    }
}

export function* uploadFileSaga(action){
    const file = action.file;
    const requestURL = `${BASE_API_URL}/${action.url}`;

    yield call(uploadFileWatcher, requestURL, file);
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
    takeLatest(GET_NEW_PRACTICE, getNewPracticeData),
    takeLatest(POST_SESSION, postSessionData),
    takeEvery(UPLOAD_REQUEST, uploadFileSaga )
  ]);
}
