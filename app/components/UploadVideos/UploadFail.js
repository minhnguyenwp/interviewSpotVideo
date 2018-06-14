/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import { FormattedMessage } from 'react-intl';

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
    const {isPractice, deviceError, error, qStep, messages} = this.props
    console.log("error", error);
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Error Page</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.errorTitle}/></h2>
                    {
                        (!isPractice || qStep != 'UploadProgress' ) && !deviceError &&
                    <div className="btn-wrap">
                        <div className="page-desc">
                            {error &&
                                <div>{error.message}</div>
                            }
                            {!error && 
                            <div>
                                <p>
                                <FormattedMessage
                                    {...messages.errorDefaultMessage1}/>
                                </p>
                                <p>
                                <FormattedMessage
                                    {...messages.errorDefaultMessage2}/>
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
                            <FormattedMessage
                                {...messages.errorCheckingMessage1}/>
                            </p>
                            <p>
                            <FormattedMessage
                            {...messages.errorCheckingMessage2}/>
                            </p>
                            <p>
                            <FormattedMessage
                            {...messages.errorCheckingMessage3}/>
                            </p>
                            <p><Img src={'assets/images/allow-device.jpg'} alt="" /></p>
                        </div>
                        <div className="text-center">
                            <a onClick={(e) => this.retryClick(e)} className="btn btn-red uppercase w_auto"><FormattedMessage
                            {...messages.buttonRetry}/></a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}
