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
import { myFormatDate } from 'utils/helper';
import AtPrefix from './AtPrefix';
import reducer from './reducer';
import saga from './saga';
import { getSession } from './actions';
import { makeSelectSession, makeSelectSessionLoading, makeSelectSessionError } from './selectors';
import InterviewQuestion from 'components/Interview/Question';
import InterviewPrepare from 'components/Interview/Prepare';
import InterviewRecording from 'components/Interview/Recording';
import InterviewStart from 'components/Interview/Start';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      qNum : 0,
      qStep : 'Start',
      anwser: false
    }
  }

  componentDidMount() {
    this.props.onPageLoad();
  }

  componentWillReceiveProps(nextProps) {
    //console.log('nextProps', nextProps);
  }

  startInterview(e) {
    e.preventDefault();
    this.setState({
      qNum : this.state.qNum + 1,
      qStep : 'Question'
    })
  }

  render() {
    const {loading, error, session} = this.props
    const { qNum } = this.state
    console.log(this.state)
    const sessionDesc = 'In an video interview, you would be given %%readingTimeLimit%% secs to read each question. When the countdown timer reaches "0", the system will automatically begin recording your response. And you\'ll be given a maximum of %%answerTimeLimit%% minutes per question to complete your response. Please note that there are no re-takes for Video Interviews and it will be  a one-time through recording.';
    return (
      <article>
      {
        session && <InterviewStart sessionDesc={sessionDesc} session={session} startInterview={(e) => this.startInterview(e)} />
      }
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  session: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onPageLoad: PropTypes.func,
  startInterview: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => {
      dispatch(getSession());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  session: makeSelectSession(),
  loading: makeSelectSessionLoading(),
  error: makeSelectSessionError()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
