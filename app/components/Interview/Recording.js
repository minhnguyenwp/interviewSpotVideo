/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import { Progress } from 'reactstrap';

export default class InterviewRecording extends React.Component { 

    doneRecord(e){
        e.preventDefault();
        if(typeof this.props.doneRecord == 'function'){
            console.log('doneRecord');
            this.props.doneRecord();
        }
    }

  render() {
    const { question, qNum } = this.props 
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Recording</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Now Recording</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            {
                                'Question ' + qNum + ': ' + question.text
                            }
                        </div>
                        <div className="upload-percent bt30">
                            <span className="num" style={{'left': '39%'}}>01:30/03:00</span>
                            <Progress value="50" />
                        </div>
                        <div className="interview-video">
                            <Img src={'assets/images/video-upload.jpg'} alt="" />
                        </div>
                        <div className="btn-wrap text-center">
                            <a onClick={(e) => this.doneRecord(e)} className="btn btn-red uppercase w_auto">done recording</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
