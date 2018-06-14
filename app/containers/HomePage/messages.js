/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startInterviewMessage1: {
    id: 'boilerplate.containers.HomePage.startInterview.message1',
    defaultMessage: 'In an video interview, you would be given {readingTimeLimit} secs to read each question. When the countdown timer reaches "0", the system will automatically begin recording your response. And you\'ll be given a maximum of {answerTimeLimit} minutes per question to complete your response. Please note that there are no re-takes for Video Interviews and it will be a one-time through recording.',
  },
  startInterviewMessage2: {
    id: 'boilerplate.containers.HomePage.startInterview.message2',
    defaultMessage: 'Your could try a Practice Interview before taking an actual interview.',
  },
  buttonPractice: {
    id: 'boilerplate.containers.HomePage.startInterview.buttonPractice.text',
    defaultMessage: 'Try a Practice Interview',
  },
  buttonBegin: {
    id: 'boilerplate.containers.HomePage.startInterview.buttonBegin.text',
    defaultMessage: 'Begin Interview',
  },
  questionStartMessage1: {
    id: 'boilerplate.containers.HomePage.questionStart.message1',
    defaultMessage: 'In the next page, you will be given {readingTimeLimit} seconds to read a Pratice Interview Question before your recording begins automatically.',
  },
  questionStartMessage2: {
    id: 'boilerplate.containers.HomePage.questionStart.message2',
    defaultMessage: 'There will be {numQuestions} questions to complete in this interview and you are given {answerTimeLimit} minutes per question.',
  },
  questionStartMessage3: {
    id: 'boilerplate.containers.HomePage.questionStart.message3',
    defaultMessage: 'When you are ready, please click \"Next\" button.',
  },
  questionStartDeadline: {
    id: 'boilerplate.containers.HomePage.deadline.message',
    defaultMessage: 'Submission Deadline: {deadline}',
  },
  questionStartButtonNext: {
    id: 'boilerplate.containers.HomePage.questionStart.buttonNext.text',
    defaultMessage: 'Next',
  },
  prepareTitle: {
    id: 'boilerplate.containers.HomePage.Prepare.title',
    defaultMessage: 'Prepare your answer',
  },
  question: {
    id: 'boilerplate.containers.HomePage.Prepare.question',
    defaultMessage: 'Question {number}: {text}',
  },
  startInText: {
    id: 'boilerplate.containers.HomePage.Prepare.startIn.text',
    defaultMessage: 'Video Recorder will start in:',
  },
  buttonStart: {
    id: 'boilerplate.containers.HomePage.Prepare.buttonStart.text',
    defaultMessage: 'Start',
  },
  recordTitle: {
    id: 'boilerplate.containers.HomePage.Record.title',
    defaultMessage: 'Now Recording',
  },
  buttonStartRecording: {
    id: 'boilerplate.containers.HomePage.Record.buttonStartRecording.text',
    defaultMessage: 'Start Recording',
  },
  buttonDoneRecording: {
    id: 'boilerplate.containers.HomePage.Record.buttonDoneRecording.text',
    defaultMessage: 'Done Recording',
  },
  recordCheckingTitle: {
    id: 'boilerplate.containers.HomePage.Record.Checking.title',
    defaultMessage: 'Test Your Recording Devices',
  },
  recordCheckingDesc1: {
    id: 'boilerplate.containers.HomePage.Record.Checking.desc1',
    defaultMessage: 'Please make sure camera and microphone on your pc work well before starting the test.',
  },
  recordCheckingDesc2: {
    id: 'boilerplate.containers.HomePage.Record.Checking.desc2',
    defaultMessage: 'Click \"Start recording\" to start testing.',
  },
  uploadingTitle: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.title',
    defaultMessage: 'Video Uploading in Progress',
  },
  uploadingMessage: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.message',
    defaultMessage: 'Please keep this page open while we are uploading your videos',
  },
  uploadingSuccess: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.success.message',
    defaultMessage: 'Answer Successfully Recorded',
  },
  checkingSuccess: {
    id: 'boilerplate.containers.HomePage.Record.Checking.success.message',
    defaultMessage: 'Your Recording Devices Successfully Testing',
  },
  buttonReview: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.buttonReview.text',
    defaultMessage: 'Review',
  },
  buttonNextQuestion: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.buttonNextQuestion.text',
    defaultMessage: 'Next Question',
  },
  buttonFinishPractice: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.buttonFinishPractice.text',
    defaultMessage: 'Finish Practice Test',
  },
  buttonFinishInterview: {
    id: 'boilerplate.containers.HomePage.Record.Uploading.buttonFinishInterview.text',
    defaultMessage: 'Finish The Interview',
  },
});
