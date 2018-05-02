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

export {
  selectHome,
  makeSelectSession,
  makeSelectQuestion,
  makeSelectSessionError,
};
