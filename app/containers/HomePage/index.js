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
import { getSession, getQuestion, getNewPractice } from './actions';
import { makeSelectSession, makeSelectSessionError, makeSelectQuestion, makeSelectNewPractice } from './selectors';

// comp interview
import InterviewQuestion from 'components/Interview/Question';
import InterviewPrepare from 'components/Interview/Prepare';
import InterviewRecording from 'components/Interview/Recording';
import InterviewStart from 'components/Interview/Start';

// comp upload
import UploadProgress from 'components/UploadVideos/UploadProgress';
import UploadSuccess from 'components/UploadVideos/UploadSuccess';
import UploadFail from 'components/UploadVideos/UploadFail';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      qNum : 0,
      qStep : 'Start',
      question: false,
      practice: false,
      isPractice: false,
      videoPlayer: false
    }
  }

  componentDidMount() {
    let qs = parseQuery(this.props.location.search)
    this.props.onPageLoad(qs['code'], qs['societe']);
  }

  componentWillReceiveProps(nextProps) {
    //console.log('nextProps', nextProps);
  }

  startInterview() {
    this.setState({
      qStep : 'Question',
      isPractice : false
    })
  }

  startPractice() {
    
    let url = this.props.session.practice['href-create']
    this.props.getNewPractice(url)

    this.setState({
      qStep : 'Question',
      isPractice : true
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

  initVideoPlayer(options){
    console.log('before init', this.state.videoPlayer)
    // instantiate Video.js
    this.state.videoPlayer = videojs('myVideo', options, function onPlayerReady(){
        // print version information at startup
        videojs.log('Using video.js', videojs.VERSION,
            'with videojs-record', videojs.getPluginVersion('record'),
            'and recordrtc', RecordRTC.version);
    });

    console.log('init', this.state.videoPlayer)
    // error handling
    this.state.videoPlayer.on('error', function(error) {
        console.warn(error);
    });

    console.log('after init', this.state.videoPlayer)
    let videoPlayer = this.state.videoPlayer
    this.state.videoPlayer.on('timestamp', function() {
        console.log('timestamp', videoPlayer)
        // timestamps
        console.log('current timestamp: ', videoPlayer.currentTimestamp);
        console.log('all timestamps: ', videoPlayer.allTimestamps);
    });

    this.state.videoPlayer.on('finishRecord', function() {
        // show save as dialog
        this.state.videoPlayer.record().saveAs({'video': 'my-video-file-name.webm'});
    });
  }

  destroyVideoPlayer(){
    if (this.state.videoPlayer) {
        this.state.videoPlayer.dispose();
    }
  }

  doneRecord(){
    let qNum = this.state.qNum + 1
    if(qNum < this.props.session.answers.length){
      let url = this.props.session.answers[qNum].href
      this.props.getQuestion(url)
      this.setState({
        qStep : 'Question',
        qNum : qNum
      })
    } else {
      this.setState({
        qStep : 'UploadProgress',
      })
    }
    
  }

  retryClick(){
    if (this.state.practice){
      window.location.reload();
    }
  }

  render() {
    const { error, session, question, getQuestion, practice } = this.props
    const { qNum, qStep, isPractice } = this.state
    console.log(this.props)
    const sessionDesc = 'In an video interview, you would be given %%readingTimeLimit%% secs to read each question. When the countdown timer reaches "0", the system will automatically begin recording your response. And you\'ll be given a maximum of %%answerTimeLimit%% minutes per question to complete your response. Please note that there are no re-takes for Video Interviews and it will be  a one-time through recording.';
    return (
      <article>
      {
        qStep == 'Start' && session && <InterviewStart sessionDesc={sessionDesc} session={session} startInterview={() => this.startInterview()} startPractice={() => this.startPractice()} />
      }
      {
        qStep == 'Question' && session && <InterviewQuestion practice={practice}  session={session} isPractice={isPractice} qNum={qNum} doPrepare={() => this.doPrepare()} />
      }
      {
        qStep == 'Prepare' && question && <InterviewPrepare question={question} qNum={qNum + 1} isPractice={isPractice} session={session} startRecord={() => this.startRecord()} />
      }
      {
        qStep == 'Recording' && question && <InterviewRecording question={question} qNum={qNum} isPractice={isPractice} session={session} doneRecord={() => this.doneRecord()} />
      }
      {
        qStep == 'UploadProgress' && <UploadProgress isPractice={isPractice} session={session} />
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
    onPageLoad: (code, societe) => {
      dispatch(getSession(code, societe));
    },
    getQuestion: (url) => {
      dispatch(getQuestion(url));
    },
    getNewPractice: (url) => {
      dispatch(getNewPractice(url));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  session: makeSelectSession(),
  error: makeSelectSessionError(),
  question: makeSelectQuestion(),
  practice: makeSelectNewPractice()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
