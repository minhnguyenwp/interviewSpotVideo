/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Progress } from 'reactstrap';

export default class UploadProgress extends React.Component { 
  retryClick(e){
    e.preventDefault();
    if(typeof this.props.retryClick == 'function'){
        console.log('retryClick');
        this.props.retryClick();
    }
  }
  render() {
    const {practice} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Upload Progress</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Video Uploading in Progress</h2>
                    <div className="page-desc text-center">
                        Please keep this page open while we are uploading your videos
                    </div>
                    <div className="upload-control">
                        <div className="upload-percent">
                            <span className="num" style={{'left': '45%'}}>50%</span>
                            <Progress value="50" />
                        </div>

                        <div className="upload-list">
                            <div className="upload-item">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 col-xs-3 upload-ttl">
                                        Question 1's Name
                                    </div>
                                    <div className="col-md-9 col-sm-8 col-xs-9 upload-col-right">
                                        <div className="inner">
                                            <Progress value="50" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-item">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 col-xs-3 upload-ttl">
                                        Question 2's Name
                                    </div>
                                    <div className="col-md-9 col-sm-8 col-xs-9 upload-col-right">
                                        <div className="inner">
                                            <Progress value="50" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-item">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 col-xs-3 upload-ttl">
                                        Question 3's Name
                                    </div>
                                    <div className="col-md-9 col-sm-8 col-xs-9 upload-col-right">
                                        <div className="inner">
                                            <Progress value="50" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {practice && 
                        <div className="btn-wrap">
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
