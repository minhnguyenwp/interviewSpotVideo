/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_SESSION,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAILURE,
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_SESSION
 */
export function getSession(code, societe) {
  return {
    type: GET_SESSION,
    code: code,
    societe: societe
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} session The session data
 *
 * @return {object}      An action object with a type of GET_SESSION_SUCCESS passing the repos
 */
export function getSessionSuccess(session) {
  return {
    type: GET_SESSION_SUCCESS,
    session: session
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_SESSION_FAILURE passing the error
 */
export function getSessionFailure(error) {
  return {
    type: GET_SESSION_FAILURE,
    error: error
  };
}


export function getQuestion(url) {
  return {
    type: GET_QUESTION,
    url: url
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} question The question data
 *
 * @return {object}      An action object with a type of GET_SESSION_SUCCESS passing the repos
 */
export function getQuestionSuccess(question) {
  return {
    type: GET_QUESTION_SUCCESS,
    question: question
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_SESSION_FAILURE passing the error
 */
export function getQuestionFailure(error) {
  return {
    type: GET_QUESTION_FAILURE,
    error: error
  };
}