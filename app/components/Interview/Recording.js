/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import VideojsRecordPlayer from 'components/video-record'

export default class InterviewRecording extends React.Component { 

    doneRecord(e){
        e.preventDefault();
        if(typeof this.props.doneRecord == 'function'){
            console.log('doneRecord');
            this.props.doneRecord();
        }
    }

    initVideoPlayer(options){
        if(typeof this.props.initVideoPlayer == 'function'){
            console.log('initVideoPlayer');
            this.props.initVideoPlayer(options);
        }
    }

    destroyVideoPlayer(){
        if(typeof this.props.destroyVideoPlayer == 'function'){
            console.log('destroyVideoPlayer');
            this.props.destroyVideoPlayer();
        }
    }

  render() {
    const { question, qNum } = this.props 
    let number = qNum + 1
    const videoJsOptions = {
        controls: true,
        width: 400,
        height: 225,
        fluid: false,
        plugins: {
            record: {
                audio: true,
                video: true,
                maxLength: 20,
                debug: true,
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
                <title>Recording</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Now Recording</h2>
                    <div className="btn-wrap w600">
                        <div className="page-desc blk-question">
                            {
                                'Question ' + number + ': ' + question.text
                            }
                        </div>
                        <VideojsRecordPlayer videoJsOptions={videoJsOptions} qNum={qNum} />
                        <div className="btn-wrap text-center">
                            <a onClick={(e) => this.doneRecord(e)} className="btn btn-red uppercase w_auto">done recording</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
