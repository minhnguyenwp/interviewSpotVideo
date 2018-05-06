/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class InterviewFinish extends React.Component { 
  retryClick(e){
    e.preventDefault();
    if(typeof this.props.retryClick == 'function'){
        console.log('retryClick');
        this.props.retryClick();
    }
  }
  render() {
    const {isPractice, sessionData} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Finish</title>
                <meta name="description" content={sessionData.title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Congratulation! You finish the test.</h2>
                    <div className="btn-wrap">
                        <div className="page-desc text-center">
                            <p>
                            You have been answered all questions.
                            </p>
                            <p>
                            Thank you for participating.
                            </p>
                        </div>
                        <div className="text-center">
                            { isPractice &&
                                <a onClick={(e) => this.retryClick(e)} className="btn btn-red uppercase w_auto">retry</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
