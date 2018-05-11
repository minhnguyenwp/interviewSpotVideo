/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'

export default class UploadSuccess extends React.Component { 
  constructor(props){
        super(props);
        this.state = { loadVideo: false };
    }
  reviewVideo(e){
    e.preventDefault()
    this.setState({loadVideo : true})
  }
  nextQuestion(e){
    e.preventDefault()
    if(typeof this.props.nextQuestion == 'function'){
        //console.log('nextQuestion');
        this.props.nextQuestion();
    }
  }
  finishTest(e){
    e.preventDefault()
    if(typeof this.props.finishTest == 'function'){
        //console.log('finishTest');
        this.props.finishTest();
    }
  }
  startTest(e){
    e.preventDefault()
    if(typeof this.props.startTest == 'function'){
        //console.log('startTest');
        this.props.startTest();
    }
  }
  render() {
    const {qNum, question, sessionData, isPractice, videoData, qStep } = this.props
    const { loadVideo } = this.state
    let number = qNum + 1
    const videoJsOptions = {
        controls: true,
        width: 400,
        height: 225,
        fluid: false,
        autoplay: true
    };
    return (
        <div className="central-wrap">
            <Helmet>
                <title>{qStep == 'TestDeviceSuccess' ? 'Test Device Successfully' : 'Uploading Success'}</title>
                <meta name="description" content={qStep == 'TestDeviceSuccess' ? 'Test Device Successfully' : (sessionData && sessionData.title)} />
            </Helmet>
            <div className="container">
                {
                  qStep == 'TestDeviceSuccess' && 
                <div className="content-wrapper">
                    <h2 className="page-ttl">Test Device Successfully!</h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                                You can review your recorded video by clicking 'Review' button.
                            </p>
                            <p>Or start doing test by clicking on 'Start' button</p>
                            <div>
                            {
                                (loadVideo && videoData) && 
                                <VideojsRecordPlayer videoData={videoData.video} videoJsOptions={videoJsOptions}  />
                            }
                            </div>
                        </div>
                        <div>
                        {
                            videoData && !loadVideo &&
                            <div className="text-center" style={{'marginBottom': '15px'}}><a onClick={(e) => this.reviewVideo(e)} className="btn btn-red uppercase w_auto">Review</a></div>
                        }    
                        <div className="text-center"><a onClick={(e) => this.startTest(e)} className="btn btn-blue uppercase w_auto">Start</a></div>
                        </div>
                    </div>
                </div>
                }
                { qStep != 'TestDeviceSuccess' &&
                <div className="content-wrapper">
                    <h2 className="page-ttl">Answer <span>{number}</span> Successfully Uploaded</h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                                You can review your Practice Interview by clicking on this text
                            </p>
                            <div>
                            {
                                (isPractice && loadVideo && videoData) && 
                                <VideojsRecordPlayer videoData={videoData[qNum].video} videoJsOptions={videoJsOptions}  />
                            }
                            </div>
                        </div>
                        <div>
                        {
                            isPractice && videoData && !loadVideo &&
                            <div className="text-center" style={{'marginBottom': '15px'}}><a onClick={(e) => this.reviewVideo(e)} className="btn btn-red uppercase w_auto">Review</a></div>
                        }
                        {
                            number < sessionData.answers.length && 
                            <div className="text-center"><a onClick={(e) => this.nextQuestion(e)} className="btn btn-blue uppercase w_auto">Next Question</a></div>
                        }
                        {
                            number >= sessionData.answers.length && 
                            <div className="text-center"><a onClick={(e) => this.finishTest(e)} className="btn btn-blue uppercase w_auto">Finish Test</a></div>
                        }
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
  }
}
