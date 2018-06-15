/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class InterviewFinish extends React.Component { 
  startInterview(e){
    e.preventDefault();
    if(typeof this.props.startInterview == 'function'){
        //console.log('retryClick');
        this.props.startInterview();
    }
  }
  render() {
    const {isPractice, sessionData, messages, intl} = this.props
    return (
        <div className="central-wrap">
            <Helmet>
                <title>{intl.formatMessage(messages.finishTitle)}</title>
                <meta name="description" content={sessionData.title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl"><FormattedMessage
                            {...messages.finishTitle}/></h2>
                    { isPractice && 
                    <div className="btn-wrap">
                        <div className="page-desc text-center">
                            <p>
                            <FormattedMessage
                            {...messages.finishPracticeMessage1}/>
                            </p>
                            <p>
                            <FormattedMessage
                            {...messages.finishPracticeMessage2}/>
                            </p>
                            <p>
                            <FormattedMessage
                            {...messages.finishPracticeMessage3}/>
                            </p>
                        </div>
                        <div className="text-center">
                            { isPractice &&
                                <a onClick={(e) => this.startInterview(e)} className="btn btn-green uppercase w_auto"><FormattedMessage
                            {...messages.buttonBegin}/></a>
                            }
                        </div>
                    </div>
                    }
                    {  !isPractice && 
                    <div className="btn-wrap">
                        <div className="page-desc text-center">
                            <p>
                            <FormattedMessage
                            {...messages.finishInterviewMessage1}/>
                            </p>
                            <p>
                            <FormattedMessage
                            {...messages.finishInterviewMessage2}/>
                            </p>
                        </div>
                        <div className="text-center">
                            { isPractice &&
                                <a className="btn btn-green uppercase w_auto"><FormattedMessage
                            {...messages.buttonMyAccount}/></a>
                            }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}

InterviewFinish.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(InterviewFinish, {withRef: true});
