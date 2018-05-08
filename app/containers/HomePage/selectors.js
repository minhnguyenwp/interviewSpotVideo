/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSession = () => createSelector(
  selectHome,
  (homeState) => homeState.get('session')
);

const makeSelectSessionError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

const makeSelectQuestion = () => createSelector(
  selectHome,
  (homeState) => homeState.get('question')
);

const makeSelectNewPractice = () => createSelector(
  selectHome,
  (homeState) => homeState.get('practice')
);

const makeSelectUploadProgress = () => createSelector(
  selectHome,
  (homeState) => homeState.get('progress')
);

const makeSelectIsUploadSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isUploadSuccess')
);

const makeSelectIsUploadFailure = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isUploadFailure')
);

export {
  selectHome,
  makeSelectSession,
  makeSelectQuestion,
  makeSelectSessionError,
  makeSelectNewPractice,
  makeSelectUploadProgress,
  makeSelectIsUploadSuccess,
  makeSelectIsUploadFailure
};
