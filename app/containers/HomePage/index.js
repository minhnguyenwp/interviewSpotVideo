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
import AtPrefix from './AtPrefix';
import reducer from './reducer';
import saga from './saga';
import { getSession } from './actions';
import { makeSelectSession, makeSelectSessionLoading, makeSelectSessionError } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.onPageLoad();
  }

  componentWillReceiveProps(nextProps) {
    //console.log('nextProps', nextProps);
  }

  render() {
    console.log('render', this.props)
    return (
      <article className="central-wrap">
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Central Test" />
        </Helmet>
        <div className="container">
          <div className="content-wrapper">
            <h2 className="page-ttl uppercase">php dev interview</h2>
            <div className="page-desc">
              <p>
              In an video interview, you would be given 30 secs to read each question. When the countdown timer reaches "0", the system will automatically begin recording your response. And you'll be given a maximum of 3 minutes per question to complete your response. Please note that there are no re-takes for Video Interviews and it will be  a one-time through recording.
              </p>
              <p>
              Your could try a Practice Interview before taking an actual interview.
              </p>
            </div>
            <div className="btn-wrap">
              <div className="time-submiss">
                Submission Deadline: 30-12-2017
              </div>
              <a href="/question" className="btn btn-blue">Try a Practice Interview</a>
              <a href="/question" className="btn btn-red">Begin Interview</a>
            </div>
          </div>
        </div>
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
