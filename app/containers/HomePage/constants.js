/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_SESSION = 'iterviewSpost/Home/GET_SESSION';
export const GET_SESSION_SUCCESS = 'iterviewSpost/Home/GET_SESSION_SUCCESS';
export const GET_SESSION_FAILURE = 'iterviewSpost/Home/GET_SESSION_FAILURE';

export const GET_QUESTION = 'iterviewSpost/Home/GET_QUESTION';
export const GET_QUESTION_SUCCESS = 'iterviewSpost/Home/GET_QUESTION_SUCCESS';
export const GET_QUESTION_FAILURE = 'iterviewSpost/Home/GET_QUESTION_FAILURE';

export const GET_NEW_PRACTICE = 'iterviewSpost/Home/GET_NEW_PRACTICE';
export const GET_NEW_PRACTICE_SUCCESS = 'iterviewSpost/Home/GET_NEW_PRACTICE_SUCCESS';
export const GET_NEW_PRACTICE_FAILURE = 'iterviewSpost/Home/GET_NEW_PRACTICE_FAILURE';

export const UPLOAD_REQUEST = 'iterviewSpost/Home/UPLOAD_REQUEST';
export const UPLOAD_PROGRESS = 'iterviewSpost/Home/UPLOAD_PROGRESS';
export const UPLOAD_SUCCESS = 'iterviewSpost/Home/UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'iterviewSpost/Home/UPLOAD_FAILURE';