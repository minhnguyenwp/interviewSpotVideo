/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { myFormatDate, parseQuery } from 'utils/helper';
import AtPrefix from './AtPrefix';
import reducer from './reducer';
import saga from './saga';
import { getSession, getQuestion, getNewPractice, uploadRequest, postSession } from './actions';
import { makeSelectSession, makeSelectSessionError, makeSelectQuestion, makeSelectNewPractice, makeSelectUploadProgress, makeSelectIsUploadSuccess } from './selectors';

// comp interview
import InterviewQuestion from 'components/Interview/Question';
import InterviewPrepare from 'components/Interview/Prepare';
import InterviewRecording from 'components/Interview/Recording';
import InterviewStart from 'components/Interview/Start';
import InterviewFinish from 'components/Interview/Finish';

// comp upload
import UploadProgress from 'components/UploadVideos/UploadProgress';
import UploadSuccess from 'components/UploadVideos/UploadSuccess';
import UploadFail from 'components/UploadVideos/UploadFail';

// lang
import messages from './messages';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { appLocales } from '../../i18n';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      qNum : 0,
      qStep : 'TestDevice',
      //qStep : 'Start',
      question: false,
      practice: false,
      isPractice: false,
      videoDemo: false,
      deviceError: false,
      videoData: [],
      locale: 'en'
    }
  }

  componentDidMount() {
    // detect IE8 and above, and edge
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        this.setState({
          qStep: 'UnsupportedBrowser'
        })
    }
    let qs = parseQuery(this.props.location.search)
    let locale = 'en'
    if(qs['locale'] && qs['locale'] != '' && appLocales.indexOf(qs['locale']) != -1) locale = qs['locale']
    this.state.locale = locale
    this.props.onPageLoad(qs['code'], qs['societe'], locale);

    window.addEventListener("beforeunload", (ev) => 
    {  
        ev.preventDefault();
        return ev.returnValue = 'Are you sure you want to leave?';
    });
  }

  componentWillReceiveProps(nextProps) {
    //console.log('nextProps', nextProps);
  }

  startInterview() {
    this.setState({
      qStep : 'Question',
      isPractice : false,
      qNum : 0,
    })
  }

  startPractice() {
    
    let url = this.props.session.practice['href-create']
    this.props.getNewPractice(url)

    this.setState({
      qStep : 'Question',
      isPractice : true,
      qNum : 0,
    })
  }

  doPrepare(){
    let qNum = this.state.qNum
    let url = this.props.session.answers[qNum].href
    if (this.state.isPractice){
      if(this.props.practice){
        url = this.props.practice.answers[qNum].href
      } else {
        url = this.props.session.practice.answers[qNum].href

      }
    }
    //console.log('question url', url)

    this.props.getQuestion(url)
    this.setState({
      qStep : 'Prepare'
    })
  }

  startRecord(){
    this.setState({
      qStep : 'Recording'
    })
  }

  startTest(){
    this.setState({
      qStep : 'Start'
    })
  }

  doneRecord(){
    if(this.state.qStep == 'TestDevice'){
      this.setState({
        qStep : 'TestDeviceSuccess'
      })
    } else {
      this.setState({
        qStep : 'UploadProgress'
      })
    }
  }

  nextQuestion(){
    let qNum = this.state.qNum + 1
    let answers = this.props.session.answers
    if(this.state.isPractice){
      if(this.props.practice){
        answers = this.props.practice.answers
      } else {
        answers = this.props.session.practice.answers
      }
    }
    if(qNum < answers.length){
      let url = answers[qNum].href
      this.props.getQuestion(url)
      this.setState({
        qStep : 'Prepare',
        qNum : qNum
      })
    } else {
      this.finishTest()
    }
  }

  retryClick(){
      window.location.reload();
  }

  finishTest(){
    if(!this.state.isPractice){
      let url = this.props.session.href
      let formData = new FormData();
          formData.append('completed', true);
      this.props.postSession(url, formData)
    }
    this.setState({
        qStep : 'Finish'
      })
  }

  saveVideoData(videoData){
    if(this.state.qStep == 'TestDevice'){
      this.state.videoDemo = videoData
    } else {
      this.state.videoData[this.state.qNum] = videoData
    }
  }

  uploadFile(url){
    let videoData = this.state.videoData[this.state.qNum].video ? this.state.videoData[this.state.qNum].video : this.state.videoData[this.state.qNum]
    if(videoData){
      let formData = new FormData();
          formData.append('answer', videoData);
          formData.append('extension', 'webm');
      //console.log(formData);
      this.props.onUpload(url, formData)
    }
  }

  onDeviceError(){
    this.setState({'deviceError': true})
  }

  render() {
    const { error, question, getQuestion, session, practice, progress, isUploadFailure, isUploadSuccess } = this.props
    const { qNum, qStep, isPractice, videoData, deviceError, videoDemo, locale } = this.state
    let sessionData = this.props.session
    if(isPractice){
      if(practice){
        sessionData = practice
      } else {
        sessionData = session.practice
      }
    }
    
    return (
      <article>
      {
        qStep == "TestDevice" && !error && !deviceError && <InterviewRecording messages={messages} qStep={qStep} saveVideoData={(videoData) => this.saveVideoData(videoData)} doneRecord={() => this.doneRecord()} onDeviceError={() => this.onDeviceError()} />
      }
      {
        qStep == "TestDeviceSuccess" && !error && !deviceError && <UploadSuccess messages={messages} qStep={qStep} videoData={videoDemo} startTest={() => this.startTest()} />
      }
      {
        qStep == 'Start' && !error && !deviceError && sessionData && <InterviewStart locale={locale}  messages={messages} session={session} startInterview={() => this.startInterview()} startPractice={() => this.startPractice()} />
      }
      {
        qStep == 'Question' && !error && !deviceError && sessionData && <InterviewQuestion locale={locale} messages={messages} sessionData={sessionData} isPractice={isPractice} qNum={qNum} practice={practice} doPrepare={() => this.doPrepare()} />
      }
      {
        qStep == 'Prepare' && !error && !deviceError && question && <InterviewPrepare messages={messages} question={question} qNum={qNum + 1} isPractice={isPractice} sessionData={sessionData} startRecord={() => this.startRecord()} />
      }
      {
        qStep == 'Recording' && !error && !deviceError && question && <InterviewRecording messages={messages} saveVideoData={(videoData) => this.saveVideoData(videoData)} question={question} qNum={qNum} isPractice={isPractice} sessionData={sessionData} doneRecord={() => this.doneRecord()} nextQuestion={() => this.nextQuestion()} onDeviceError={() => this.onDeviceError()} qStep={qStep} />
      }
      {
        qStep == 'UploadProgress' && !error && !deviceError && !isPractice && !isUploadSuccess && <UploadProgress messages={messages} isPractice={isPractice} sessionData={sessionData} question={question} qNum={qNum} uploadFile={(url) => this.uploadFile(url)} progress={progress} />
      }
      {
        qStep == 'UploadProgress'  && !error && !deviceError && (isUploadSuccess || isPractice) && <UploadSuccess messages={messages} isPractice={isPractice} sessionData={sessionData} question={question} qNum={qNum} videoData={videoData} nextQuestion={() => this.nextQuestion()} finishTest={() => this.finishTest()} />
      }
      {
        (error || deviceError) && <UploadFail messages={messages} error={error} deviceError={deviceError} qStep={qStep} isPractice={isPractice} sessionData={sessionData} question={question} qNum={qNum} videoData={videoData} uploadFile={(url) => this.uploadFile(url)} retryClick={() => this.retryClick()} />
      }
      {
        qStep == 'Finish' && !error && !deviceError && <InterviewFinish messages={messages} isPractice={isPractice} sessionData={sessionData} startInterview={() => this.startInterview()} />
      }
      {
        qStep == "UnsupportedBrowser" && !error && !deviceError && <UploadFail messages={messages} />
      }
      </article>
    );
  }
}

HomePage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  session: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  question: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  practice: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onPageLoad: PropTypes.func,
  getQuestion: PropTypes.func,
  startInterview: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (code, societe, locale) => {
      dispatch(getSession(code, societe, locale));
    },
    getQuestion: (url) => {
      dispatch(getQuestion(url));
    },
    getNewPractice: (url) => {
      dispatch(getNewPractice(url));
    },
    onUpload: (url, file) => {
        dispatch(uploadRequest(url, file));
    },
    postSession: (url, data) => {
        dispatch(postSession(url, data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  session: makeSelectSession(),
  error: makeSelectSessionError(),
  question: makeSelectQuestion(),
  practice: makeSelectNewPractice(),
  progress: makeSelectUploadProgress(),
  isUploadSuccess: makeSelectIsUploadSuccess(),
  locale: makeSelectLocale()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
