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
        console.log('nextQuestion');
        this.props.nextQuestion();
    }
  }
  finishTest(e){
    e.preventDefault()
    if(typeof this.props.finishTest == 'function'){
        console.log('finishTest');
        this.props.finishTest();
    }
  }
  render() {
    const {qNum, question, sessionData, isPractice, videoData } = this.props
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
                <title>Upload Success</title>
                <meta name="description" content={sessionData.title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Answer <span>{number}</span> Successfully Uploaded</h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                                You can review your Practice Interview by clicking on this text
                            </p>
                            <div>
                            {
                                (!isPractice || !loadVideo || !videoData) && 
                                <p><Img src={'assets/images/video-upload.jpg'} alt="" /></p>
                            }
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
            </div>
        </div>
    );
  }
}
