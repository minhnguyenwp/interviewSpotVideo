/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class UploadFail extends React.Component { 

  render() {
    return (
        <div>
            <Helmet>
                <title>Error Page</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">OOPS! This is embarrassing</h2>
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
                            <a href="#" className="btn btn-red uppercase w_auto">retry</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
