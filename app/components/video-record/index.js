import React from 'react';
import { Progress } from 'reactstrap';
import { toHHMMSS } from 'utils/helper';

export default class VideojsRecordPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = { recordState: 'initDevice', curentTime: 0 };
    }

    componentDidMount() {
        if(this.props.isRecord){
            // instantiate Video.js
            this.player = videojs(this.videoNode, this.props.videoJsOptions, function onPlayerReady(){
                // print version information at startup
                // videojs.log('Using video.js', videojs.VERSION,
                //     'with videojs-record', videojs.getPluginVersion('record'),
                //     'and recordrtc', RecordRTC.version);
            });
            let me = this
            this.player.record().getDevice()
            // error handling
            this.player.on('error', function(error) {
                console.warn(error);
            });

            this.player.on('timestamp', function() {
                
                // timestamps
                me.onTimeStamp();

                // stream data
                //console.log('array of blobs: ', player.recordedData);
                // or construct a single blob:
                // var blob = new Blob(blobs, {
                //     type: 'video/webm'
                // });
            });

            this.player.on('deviceReady', function(){
                me.onDeviceReady()
            })

            this.player.on('deviceError', function(){
                me.onDeviceError()
            })

            this.player.on('finishRecord', function() {
                // show save as dialog
                me.doneRecord()
            });
        } else {
            let videoData = this.props.videoData
            this.player = videojs(this.videoNode, this.props.videoJsOptions, function onPlayerReady(){
                //console.log('videoData', videoData)
                this.src({ type: 'video/webm', src: window.blobUtil.createObjectURL(videoData) });
                this.load();
               
            });
        }
    }

    onDeviceReady(){
        //console.log('deviceReady')
        this.setState({ recordState: 'deviceReady', curentTime: 0 })
    }

    onDeviceError(){
        if(typeof this.props.onDeviceError == 'function'){
            //console.log(this.player.recordedData)
            this.props.onDeviceError();
        }
    }

    onTimeStamp(){
        //console.log(this.state)
        this.setState({curentTime: this.player.record().getCurrentTime()})
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    startRecord(e){
        e.preventDefault();
        this.player.record().start();
        this.setState({
            recordState: 'Recording'
        })
    }

    stopRecord(e){
        e.preventDefault();
        this.player.record().stop();
    }

    doneRecord(){
        if(typeof this.props.saveVideoData == 'function'){
            //console.log(this.player.recordedData)
            this.props.saveVideoData(this.player.recordedData);
        }
        if(typeof this.props.doneRecord == 'function'){
            //console.log('doneRecord');
            let me = this
            setTimeout(function(){
                me.props.doneRecord();
            }, 500)
            
        }
    }
    timeOut(){
        //console.log('videojs timeout')
        if(this.player.record().isRecording()){
            this.player.record().stop();
            this.doneRecord();
        } else {
            this.nextQuestion()
        }
    }
    nextQuestion(){
        if(typeof this.props.nextQuestion == 'function'){
            this.props.nextQuestion();
        }
   }
    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        let { recordState, curentTime } = this.state
        let { maxDuration, isRecord } = this.props
        let progress = Math.round(curentTime/maxDuration*100)
        return (
            <div>
            { isRecord && 
            <div className="video-player">
                <div className="upload-percent bt30">
                    <span className="num" style={{'left': '39%'}}><span>{toHHMMSS(curentTime)}</span>/<span>{toHHMMSS(maxDuration)}</span></span>
                    <Progress value={progress} />
                </div>
                <div className="interview-video">
                    <div data-vjs-player>
                        <video id="myVideo" ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
                    </div>
                </div>
                <div className="btn-wrap text-center">
                { 
                    recordState == 'deviceReady' && 
                    <a onClick={(e) => this.startRecord(e)} className="btn btn-red uppercase w_auto">start recording</a>
                }
                { 
                    recordState == 'Recording' && 
                    <a onClick={(e) => this.stopRecord(e)} className="btn btn-red uppercase w_auto">done recording</a>
                }
                </div>
            </div>
            }
            {
                !isRecord &&
                <div className="video-player">
                    <div className="interview-video">
                        <div data-vjs-player>
                            <video id="myVideo" ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
}