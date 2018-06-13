/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import { myFormatDate } from 'utils/helper';
import { FormattedMessage } from 'react-intl';

export default class InterviewStart extends React.Component { 
  startInterview(e){
    e.preventDefault();
    if(typeof this.props.startInterview == 'function'){
        //console.log('startInterview');
        this.props.startInterview();
    }
  }
  startPractice(e){
    e.preventDefault();
    if(typeof this.props.startPractice == 'function'){
        //console.log('startPractice');
        this.props.startPractice();
    }
  }
  render() {
    const {session, messages} = this.props
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
              <FormattedMessage
                    {...messages.startInterviewMessage1}
                    values={{
                      readingTimeLimit: session.readingTimeLimit,
                      answerTimeLimit: Math.round(session.answerTimeLimit/60),
                    }}
                  />
              </p>
              <p>
              <FormattedMessage
                  {...messages.startInterviewMessage2}/>
              </p>
            </div>
            <div className="btn-wrap">
              <div className="time-submiss">
                <FormattedMessage
                    {...messages.questionStartDeadline}
                    values={{
                      deadline: myFormatDate('dd-mm-yyyy', session.deadline),
                    }}
                  />
              </div>
              <a onClick={(e) => this.startPractice(e)} className="btn btn-blue"><FormattedMessage {...messages.buttonPractice}/></a>
              <a onClick={(e) => this.startInterview(e)} className="btn btn-red"><FormattedMessage {...messages.buttonBegin}/></a>
            </div>
          </div>
          }
        </div>
        </div>
    );
  }
}
