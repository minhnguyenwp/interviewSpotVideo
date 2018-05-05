import React from 'react';
import { Progress } from 'reactstrap';

export default class VideojsRecordPlayer extends React.Component {
    componentDidMount() {
        console.log(this.props.videoJsOptions)
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props.videoJsOptions, function onPlayerReady(){
            // print version information at startup
            videojs.log('Using video.js', videojs.VERSION,
                'with videojs-record', videojs.getPluginVersion('record'),
                'and recordrtc', RecordRTC.version);
        });
        let player = this.player
        // error handling
        this.player.on('error', function(error) {
            console.warn(error);
        });

        this.player.on('timestamp', function() {
            // timestamps
            console.log('player', player)
            console.log('current timestamp: ', player.currentTimestamp);
            console.log('all timestamps: ', player.allTimestamps);

            // stream data
            //console.log('array of blobs: ', player.recordedData);
            // or construct a single blob:
            // var blob = new Blob(blobs, {
            //     type: 'video/webm'
            // });
        });

        this.player.on('finishRecord', function() {
            // show save as dialog
            player.record().saveAs({'video': 'my-video-file-name.mp4'});
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div className="video-player">
                <div className="upload-percent bt30">
                    <span className="num" style={{'left': '39%'}}>01:30/03:00</span>
                    <Progress value="50" />
                </div>
                <div className="interview-video">
                    <div data-vjs-player>
                        <video id="myVideo" ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
                    </div>
                </div>
                
            </div>
            
        )
    }
}