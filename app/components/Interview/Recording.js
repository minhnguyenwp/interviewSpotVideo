/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'
import ReactCountdownClock from 'components/react-countdown-clock'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class InterviewRecording extends React.Component { 

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
    const { question, qNum, sessionData, qStep, messages } = this.props 
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
    let title = qStep == "TestDevice" ? this.props.intl.formatMessage(messages.recordCheckingTitle) : this.props.intl.formatMessage(messages.recordTitle)
    let desc = qStep == "TestDevice" ? this.props.intl.formatMessage(messages.recordCheckingTitle) : sessionData.title
    return (
        <div className="central-wrap">
            <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={desc} />
            </Helmet>
            <div className="container">
                {
                qStep == "TestDevice" &&
                <div className="content-wrapper">
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.recordCheckingTitle}/></h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            <p><FormattedMessage
                            {...messages.recordCheckingDesc1}/></p>
                            <p><FormattedMessage
                            {...messages.recordCheckingDesc2}/></p>
                        </div>
                        <VideojsRecordPlayer messages={messages} ref={instance => { this.child = instance; }} isRecord={true} 
                                                saveVideoData={(videoData) => this.saveVideoData(videoData)} onDeviceError={() => this.onDeviceError()}
                                                doneRecord={() => this.doneRecord()} videoJsOptions={videoJsOptions} maxDuration={30} />
                        
                    </div>
                </div>
                }
                { qStep != "TestDevice" &&
                <div className="content-wrapper">
                    <div className="countdown-wrap">
                      <ReactCountdownClock seconds={question.answerTimeLimit + 2}
                                                   color="#c52026"
                                                   alpha={1}
                                                   size={36}
                                                   fontSize={16}
                                                   weight={18}
                                                   fontColor="#fff"
                                                   onComplete={() => this.timeOut()} />
                    </div>
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.recordTitle}/></h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            <FormattedMessage
                            {...messages.question}
                            values={{
                              number: qNum+1,
                              text: question.text,
                            }}
                          />
                        </div>
                        <VideojsRecordPlayer messages={messages} ref={instance => { this.child = instance; }} isRecord={true} 
                                                saveVideoData={(videoData) => this.saveVideoData(videoData)} 
                                                doneRecord={() => this.doneRecord()} videoJsOptions={videoJsOptions}
                                                onDeviceError={() => this.onDeviceError()}
                                                nextQuestion={() => this.nextQuestion()}
                                                maxDuration={question.answerTimeLimit} qStep={qStep} />
                        
                    </div>
                </div>
                }
            </div>
        </div>
    );
  }
}

InterviewRecording.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(InterviewRecording, {withRef: true});