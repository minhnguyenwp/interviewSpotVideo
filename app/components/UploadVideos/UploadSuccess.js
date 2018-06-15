/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class UploadSuccess extends React.Component { 
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
    const {qNum, question, sessionData, isPractice, videoData, qStep, messages, intl } = this.props
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
                <title>{qStep == 'TestDeviceSuccess' ? intl.formatMessage(messages.checkingSuccess) : intl.formatMessage(messages.uploadingSuccess)}</title>
                <meta name="description" content={qStep == 'TestDeviceSuccess' ? intl.formatMessage(messages.checkingSuccess) : (sessionData && sessionData.title)} />
            </Helmet>
            <div className="container">
                {
                  qStep == 'TestDeviceSuccess' && 
                <div className="content-wrapper">
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.checkingSuccess}/></h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
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
                            <div className="text-center" style={{'marginBottom': '15px'}}><a onClick={(e) => this.reviewVideo(e)} className="btn btn-red uppercase w_auto"><FormattedMessage
                            {...messages.buttonReview}/></a></div>
                        }    
                        <div className="text-center"><a onClick={(e) => this.startTest(e)} className="btn btn-blue uppercase w_auto"><FormattedMessage
                            {...messages.buttonStart}/></a></div>
                        </div>
                    </div>
                </div>
                }
                { qStep != 'TestDeviceSuccess' &&
                <div className="content-wrapper">
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.uploadingSuccess}/></h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
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
                            <div className="text-center" style={{'marginBottom': '15px'}}><a onClick={(e) => this.reviewVideo(e)} className="btn btn-red uppercase w_auto"><FormattedMessage
                            {...messages.buttonReview}/></a></div>
                        }
                        {
                            number < sessionData.answers.length && 
                            <div className="text-center"><a onClick={(e) => this.nextQuestion(e)} className="btn btn-blue uppercase w_auto"><FormattedMessage
                            {...messages.buttonNextQuestion}/></a></div>
                        }
                        {
                            number >= sessionData.answers.length && isPractice &&
                            <div className="text-center"><a onClick={(e) => this.finishTest(e)} className="btn btn-blue uppercase w_auto"><FormattedMessage
                            {...messages.buttonFinishPractice}/></a></div>
                        }
                        {
                            number >= sessionData.answers.length && !isPractice &&
                            <div className="text-center"><a onClick={(e) => this.finishTest(e)} className="btn btn-green uppercase w_auto"><FormattedMessage
                            {...messages.buttonFinishInterview}/></a></div>
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

UploadSuccess.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(UploadSuccess, {withRef: true});