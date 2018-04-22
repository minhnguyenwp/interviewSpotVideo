/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSession = () => createSelector(
  selectHome,
  (homeState) => homeState.get('session')
);

const makeSelectSessionLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectSessionError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectSession,
  makeSelectSessionLoading,
  makeSelectSessionError,
};
