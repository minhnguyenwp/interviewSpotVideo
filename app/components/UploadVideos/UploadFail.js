/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class UploadFail extends React.Component { 
    retryUpload(e){
        console.log('retryUpload')
        if(typeof this.props.uploadFile == 'function'){
            this.props.uploadFile(this.props.sessionData.answers[this.props.qNum].href)
        }
    }
  render() {
    const {isPractice} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Error Page</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">OOPS! This is embarrassing</h2>
                    { isPractice && qStep=='UploadProgress' &&
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                            There seems to be some error in the background uploading of your videos.
                            </p>
                            <p>
                            Please check your Internet Connection and Click RETRY to restart the progress.
                            </p>
                        </div>
                        <div className="text-center">
                            <a onClick={(e) => this.retryUpload(e)} className="btn btn-red uppercase w_auto">retry</a>
                        </div>
                    </div>
                    }
                    {
                        (!isPractice || qStep != 'UploadProgress') && 
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                            There seems to be some error happened.
                            </p>
                            <p>
                            Please check your Internet Connection and contact to <a href="maito:admin@system.com">admin@system.com</a> to get new test.
                            </p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}
