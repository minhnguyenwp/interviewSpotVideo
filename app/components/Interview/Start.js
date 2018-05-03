/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import { myFormatDate } from 'utils/helper';

export default class InterviewStart extends React.Component { 
  startInterview(e){
    e.preventDefault();
    if(typeof this.props.startInterview == 'function'){
        console.log('startInterview');
        this.props.startInterview();
    }
  }
  render() {
    const {session, sessionDesc} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Central Test" />
        </Helmet>
        <div className="container">
          {session && 
          <div className="content-wrapper">
            <h2 className="page-ttl uppercase">{session.title}</h2>
            <div className="page-desc">
              <p>
              {sessionDesc.replace('%%readingTimeLimit%%', session.readingTimeLimit).replace('%%answerTimeLimit%%', Math.round(session.answerTimeLimit/60))}
              </p>
              <p>
              Your could try a Practice Interview before taking an actual interview.
              </p>
            </div>
            <div className="btn-wrap">
              <div className="time-submiss">
                {'Submission Deadline: ' + myFormatDate('dd-mm-yyyy', session.deadline)} 
              </div>
              <a href="/question" className="btn btn-blue">Try a Practice Interview</a>
              <a onClick={(e) => this.startInterview(e)} className="btn btn-red">Begin Interview</a>
            </div>
          </div>
          }
        </div>
        </div>
    );
  }
}
