/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Progress } from 'reactstrap';

export default class UploadProgress extends React.Component {
    componentDidMount() {
        if(typeof this.props.uploadFile == 'function'){
            this.props.uploadFile(this.props.sessionData.answers[this.props.qNum].href)
        }
    }
  retryClick(e){
    e.preventDefault();
    if(typeof this.props.retryClick == 'function'){
        console.log('retryClick');
        this.props.retryClick();
    }
  }
  render() {
    const {isPractice, progress, question} = this.props
    let percent = Math.round(progress*100)
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
                            <span className="num" style={{'left': '45%'}}>{percent + '%'}</span>
                            <Progress value={percent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
