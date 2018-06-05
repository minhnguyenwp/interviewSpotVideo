/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';

export default class UploadFail extends React.Component { 
    retryUpload(e){
        //console.log('retryUpload')
        if(typeof this.props.uploadFile == 'function'){
            this.props.uploadFile(this.props.sessionData.answers[this.props.qNum].href)
        }
    }

    retryClick(e){
        if(typeof this.props.retryClick == 'function'){
            this.props.retryClick()
        }
    }
  render() {
    const {isPractice, deviceError, error} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Error Page</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">OOPS! This is embarrassing</h2>
                    { isPractice && qStep=='UploadProgress' && !deviceError &&
                    <div className="btn-wrap">
                        <div className="page-desc">
                            {error &&
                                <div>{error}</div>
                            }
                            {!error && 
                            <div>
                                <p>
                                There seems to be some error in the background uploading of your videos.
                                </p>
                                <p>
                                Please check your Internet Connection and Click RETRY to restart the progress.
                                </p>
                            </div>
                            }
                        </div>
                        <div className="text-center">
                            <a onClick={(e) => this.retryUpload(e)} className="btn btn-red uppercase w_auto">retry</a>
                        </div>
                    </div>
                    }
                    {
                        (!isPractice || qStep != 'UploadProgress' ) && !deviceError &&
                    <div className="btn-wrap">
                        <div className="page-desc">
                            {error &&
                                <div>{error}</div>
                            }
                            {!error && 
                            <div>
                                <p>
                                There seems to be some error happened.
                                </p>
                                <p>
                                Please check your Internet Connection and contact to <a href="maito:admin@system.com">admin@system.com</a> to get new test.
                                </p>
                            </div>
                            }
                        </div>
                    </div>
                    }
                    {
                    deviceError && 
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                            Your camera and microphone seem not to work. Please check!
                            </p>
                            <p>
                            If you are sure your devices work well. Please also check if you blocked them on your browser.
                            </p>
                            <p>
                            Please make sure you allow your camera and microphone to work on your browser, follow below instruction image then try again:
                            </p>
                            <p><Img src={'assets/images/allow-device.jpg'} alt="" /></p>
                        </div>
                        <div className="text-center">
                            <a onClick={(e) => this.retryClick(e)} className="btn btn-red uppercase w_auto">retry</a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}
