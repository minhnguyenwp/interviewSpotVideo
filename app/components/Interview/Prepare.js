/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';

export default class InterviewPrepare extends React.Component { 

  render() {
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
                            Question 1: Tell us about a project that you have recently worked on. What was your role and was the project a success or failure? And why?
                        </div>
                        <div className="interview-video">
                            <div className="time-countdown">
                                <span>30</span>
                            </div>
                            <Img src={'assets/images/video-upload.jpg'} alt="" />
                        </div>
                        <div className="btn-wrap text-center">
                            <a href="/recording" className="btn btn-red uppercase w_auto">start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
