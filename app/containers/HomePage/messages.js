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
    defaultMessage: 'In the next page, you will be given {readingTimeLimit} seconds to read each question before your recording begins automatically.',
  },
  questionStartMessage2: {
    id: 'boilerplate.containers.HomePage.questionStart.message2',
    defaultMessage: 'There will be {numQuestions} questions to complete this interview and you are given {answerTimeLimit} minutes per question.',
  },
  questionStartMessage3: {
    id: 'boilerplate.containers.HomePage.questionStart.message3',
    defaultMessage: 'When you are ready, please click \"Next\".',
  },
  questionStartPracticeMessage1: {
    id: 'boilerplate.containers.HomePage.questionStart.practiceMessage1',
    defaultMessage: 'In the next page, you will be given {readingTimeLimit} seconds to read each practic question before your recording begins automatically.',
  },
  questionStartPracticeMessage2: {
    id: 'boilerplate.containers.HomePage.questionStart.practiceMessage2',
    defaultMessage: 'There will be {numQuestions} questions to complete this practice interview and you are given {answerTimeLimit} minutes per question.',
  },
  questionStartPracticeMessage3: {
    id: 'boilerplate.containers.HomePage.questionStart.practiceMessage3',
    defaultMessage: 'When you are ready, please click on \"Next\" button.',
  },
  questionStartDeadline: {
    id: 'boilerplate.containers.HomePage.questionStart.dealine.message',
    defaultMessage: 'Submission Deadline: {deadline}',
  },
  questionStartDeadlineInvalid: {
    id: 'boilerplate.containers.HomePage.questionStart.dealine.invalid.message',
    defaultMessage: 'Not Applicable',
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
    defaultMessage: 'Test Device Successfully!',
  },
  checkingSuccessP1: {
    id: 'boilerplate.containers.HomePage.Record.Checking.success.message.p1',
    defaultMessage: 'You can review your recorded video by clicking on the  "Review" button.',
  },
  checkingSuccessP2: {
    id: 'boilerplate.containers.HomePage.Record.Checking.success.message.p2',
    defaultMessage: 'Or starting the interview by clicking on the "Start" button.',
  },
  checkingSuccessP3: {
    id: 'boilerplate.containers.HomePage.Record.Checking.success.message.p3',
    defaultMessage: 'Once you are ready, you can click on the "Start" button.',
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
  finishTitle: {
    id: 'boilerplate.containers.HomePage.Finish.title',
    defaultMessage: 'Congratulations!'
  },
  finishPracticeMessage1: {
    id: 'boilerplate.containers.HomePage.Finish.Practice.message1',
    defaultMessage: 'You have finished the practice interview.'
  },
  finishPracticeMessage2: {
    id: 'boilerplate.containers.HomePage.Finish.Practice.message2',
    defaultMessage: 'You can now start the real interview.'
  },
  finishPracticeMessage3: {
    id: 'boilerplate.containers.HomePage.Finish.Practice.message3',
    defaultMessage: 'Once ready, click on "Begin Interview"'
  },
  buttonBegin: {
    id: 'boilerplate.containers.HomePage.Finish.Practice.buttonBegin',
    defaultMessage: 'Begin Interview'
  },
  finishInterviewMessage1: {
    id: 'boilerplate.containers.HomePage.Finish.Interview.message1',
    defaultMessage: 'You have finished the interview.'
  },
  finishInterviewMessage2: {
    id: 'boilerplate.containers.HomePage.Finish.Interview.message2',
    defaultMessage: 'Thank you for your participation.'
  },
  buttonMyAccount: {
    id: 'boilerplate.containers.HomePage.Finish.Interview.buttonMyAccount',
    defaultMessage: 'Access My Account'
  },
  errorTitle: {
    id: 'boilerplate.containers.HomePage.Error.title',
    defaultMessage: 'OOPS! This is embarrassing'
  },
  errorDefaultMessage1: {
    id: 'boilerplate.containers.HomePage.Error.default.message1',
    defaultMessage: 'There seems to be some error in the background uploading of your videos.'
  },
  errorDefaultMessage2: {
    id: 'boilerplate.containers.HomePage.Error.default.message1',
    defaultMessage: 'Please check your Internet Connection and contact to <a href=\"maito:admin@system.com\">admin@system.com</a> to get new test.'
  },
  errorCheckingMessage1: {
    id: 'boilerplate.containers.HomePage.Error.Checking.message1',
    defaultMessage: 'Your camera and microphone seem not to work. Please check!'
  },
  errorCheckingMessage2: {
    id: 'boilerplate.containers.HomePage.Error.Checking.message2',
    defaultMessage: 'If you are sure your devices work well. Please also check if you blocked them on your browser.'
  },
  errorCheckingMessage3: {
    id: 'boilerplate.containers.HomePage.Error.Checking.message3',
    defaultMessage: 'Please make sure you allow your camera and microphone to work on your browser, follow below instruction image then try again:'
  },
  errorUnsupportedBrowser:{
    id: 'boilerplate.containers.HomePage.Error.UnsupportedBrowser',
    defaultMessage: ''
  },
  buttonRetry: {
    id: "boilerplate.containers.HomePage.Error.Checking.buttonRetry",
    defaultMessage: "Unsupported Browser! Please try again on another browser."
  }
});