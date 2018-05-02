/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';

export default class InterviewPrepare extends React.Component { 

  startRecord(e){
    e.preventDefault();
    if(typeof this.props.startRecord == 'function'){
        console.log('startRecord');
        this.props.startRecord(e);
    }
  }

  render() {
    const { question, qNum } = this.props 
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Prepare</title>
                <meta name="description" content="Central Test" />
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
                        <div className="interview-video">
                            <div className="time-countdown">
                                <span>{question.readingTimeLimit}</span>
                            </div>
                            <Img src={'assets/images/video-upload.jpg'} alt="" />
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
