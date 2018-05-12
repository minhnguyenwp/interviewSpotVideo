/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'
import ReactCountdownClock from 'components/react-countdown-clock'

export default class InterviewRecording extends React.Component { 

    doneRecord(){
        if(typeof this.props.doneRecord == 'function'){
            //console.log('doneRecord');
            this.props.doneRecord();
        }
    }

   saveVideoData(videoData){
        if(typeof this.props.saveVideoData == 'function'){
            //console.log('saveVideoData');
            this.props.saveVideoData(videoData);
        }
   }

   timeOut(){
       // console.log('record timeout')
        // function from child
        this.child.timeOut();
   }

   nextQuestion(){
        if(typeof this.props.nextQuestion == 'function'){
            this.props.nextQuestion();
        }
   }

   onDeviceError(){
        if(typeof this.props.onDeviceError == 'function'){
            this.props.onDeviceError();
        }
   }

  render() {
    const { question, qNum, sessionData, qStep } = this.props 
    let number = qNum + 1
    let timeLimit = qStep == 'TestDevice' ? 30 : question.answerTimeLimit
    const videoJsOptions = {
        controls: false,
        width: 400,
        height: 225,
        fluid: false,
        plugins: {
            record: {
                audio: true,
                video: false,
                maxLength: timeLimit,
                debug: false,
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
                <title>{qStep == "TestDevice" ? 'Checking Record' : 'Recording'}</title>
                <meta name="description" content={qStep == "TestDevice" ? 'Checking recording devices before doing test' : sessionData.title} />
            </Helmet>
            <div className="container">
                {
                qStep == "TestDevice" &&
                <div className="content-wrapper">
                    <h2 className="page-ttl">Test Your Recording Devices</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            <p>Please make sure camera and microphone on your pc work well before starting the test.</p>
                            <p>Click "Start recording" to start testing.</p>
                        </div>
                        <VideojsRecordPlayer ref={instance => { this.child = instance; }} isRecord={true} 
                                                saveVideoData={(videoData) => this.saveVideoData(videoData)} onDeviceError={() => this.onDeviceError()}
                                                doneRecord={() => this.doneRecord()} videoJsOptions={videoJsOptions} maxDuration={30} />
                        
                    </div>
                </div>
                }
                { qStep != "TestDevice" &&
                <div className="content-wrapper">
                    <div className="countdown-wrap">
                      <ReactCountdownClock seconds={question.answerTimeLimit}
                                                   color="#c52026"
                                                   alpha={1}
                                                   size={36}
                                                   fontSize={16}
                                                   weight={18}
                                                   fontColor="#fff"
                                                   onComplete={() => this.timeOut()} />
                    </div>
                    <h2 className="page-ttl">Now Recording</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            {
                                'Question ' + number + ': ' + question.text
                            }
                        </div>
                        <VideojsRecordPlayer ref={instance => { this.child = instance; }} isRecord={true} 
                                                saveVideoData={(videoData) => this.saveVideoData(videoData)} 
                                                doneRecord={() => this.doneRecord()} videoJsOptions={videoJsOptions}
                                                onDeviceError={() => this.onDeviceError()}
                                                nextQuestion={() => this.nextQuestion()}
                                                maxDuration={question.answerTimeLimit} />
                        
                    </div>
                </div>
                }
            </div>
        </div>
    );
  }
}
