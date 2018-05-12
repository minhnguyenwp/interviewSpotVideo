/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import ReactCountdownClock from 'components/react-countdown-clock'

export default class InterviewPrepare extends React.Component { 

  startRecord(e){
    e.preventDefault();
    if(typeof this.props.startRecord == 'function'){
        //console.log('startRecord');
        this.props.startRecord();
    }
  }

  timeOut(){
    if(typeof this.props.startRecord == 'function'){
        //console.log('startRecord');
        this.props.startRecord();
    }
  }

  render() {
    const { question, qNum, sessionData } = this.props 
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Prepare</title>
                <meta name="description" content={sessionData.title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Prepare your answer</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            {
                                'Question ' + qNum + ': ' + question.text
                            }
                            
                        </div>
                        <div className="countdown-wrap-prepare">
                          <p>Video Recorder will start in: </p>
                          <ReactCountdownClock seconds={question.readingTimeLimit}
                                                       color="#c52026"
                                                       alpha={1}
                                                       size={134}
                                                       fontSize={64}
                                                       weight={67}
                                                       fontColor="#fff"
                                                       onComplete={() => this.timeOut()} />
                        </div>
                        <div className="btn-wrap text-center">
                            <a onClick={(e) => this.startRecord(e)} className="btn btn-red uppercase w_auto">start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
