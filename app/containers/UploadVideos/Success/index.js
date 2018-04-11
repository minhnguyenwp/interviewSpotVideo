/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Img from '../../../components/Img';

export default class UploadSuccess extends React.Component { 

  render() {
    return (
        <div>
            <Helmet>
                <title>Upload Success Page</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Interview Successfully Uploaded</h2>
                    <div className="btn-wrap">
                        <div className="page-desc">
                            <p>
                                You can review your Practice Interview by clicking on this text
                            </p>
                            <p>
                                <Img src={'assets/images/video-upload.jpg'} alt="" />
                            </p>
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-red uppercase w_auto">close</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
