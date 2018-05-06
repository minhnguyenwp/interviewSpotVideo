/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'

export default class InterviewRecording extends React.Component { 

    doneRecord(){
        if(typeof this.props.doneRecord == 'function'){
            console.log('doneRecord');
            this.props.doneRecord();
        }
    }

   saveVideoData(videoData){
        if(typeof this.props.saveVideoData == 'function'){
            console.log('saveVideoData');
            this.props.saveVideoData(videoData);
        }
   }

  render() {
    const { question, qNum, sessionData } = this.props 
    let number = qNum + 1
    const videoJsOptions = {
        controls: false,
        width: 400,
        height: 225,
        fluid: false,
        plugins: {
            record: {
                audio: true,
                video: true,
                maxLength: question.answerTimeLimit,
                debug: true,
                timeSlice: 1000,
                video: {
                    // video constraints: set resolution of camera
                    mandatory: {
                        minWidth: 400,
                        minHeight: 225,
                    },
                },
                // dimensions of captured video frames
                frameWidth: 400,
                frameHeight: 225
            }
        }
    };
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Recording</title>
                <meta name="description" content={sessionData.title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Now Recording</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            {
                                'Question ' + number + ': ' + question.text
                            }
                        </div>
                        <VideojsRecordPlayer isRecord={true} saveVideoData={(videoData) => this.saveVideoData(videoData)} doneRecord={() => this.doneRecord()} videoJsOptions={videoJsOptions} maxDuration={question.answerTimeLimit} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
