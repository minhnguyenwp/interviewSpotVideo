/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  questionStartMessage1: {
    id: 'boilerplate.containers.HomePage.questionStart1.message',
    defaultMessage: 'In the next page, you will be given {readingTimeLimit} seconds to read a Pratice Interview Question before your recording begins automatically.',
  },
  questionStartMessage2: {
    id: 'boilerplate.containers.HomePage.questionStart2.message',
    defaultMessage: 'There will be {numQuestions} questions to complete in this interview and you are given {answerTimeLimit} minutes per question.',
  },
  questionStartMessage3: {
    id: 'boilerplate.containers.HomePage.questionStart3.message',
    defaultMessage: 'When you are ready, please click \"Next\" button.',
  },
});
