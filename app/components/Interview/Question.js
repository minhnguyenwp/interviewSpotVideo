/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { nth } from 'utils/helper';
import Img from 'components/Img';

export default class InterviewQuestion extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    
  }
  doPrepare(e){
    e.preventDefault();
    if(typeof this.props.doPrepare == 'function'){
        console.log('doPrepare');
        this.props.doPrepare(e);
    }
  }
  render() {
    const {question, session, qNum} = this.props

    return (
        <div className="central-wrap">
            <Helmet>
                <title>{question.name}</title>
                <meta name="description" content={question.text} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">{question.name}</h2>
                    <div className="page-desc">
                        <p>
                            In the next page, you will be given <span>{question.readingTimeLimit}</span> seconds to read a Pratice Interview Question before your recording begins automatically.
                        </p>
                        <p>
                            This is your <span>{qNum + nth(qNum)}</span> question and There is a total of <span>{session.answers.length}</span> questions to complete in this interview and you are given <span>{Math.round(question.answerTimeLimit/60)}</span> minutes for this question.
                        </p>
                        <p>
                            When you are ready, please click "Next"
                        </p>
                    </div>
                    <div className="btn-wrap">
                        <div className="time-submiss">
                            Submission Deadline: Not Applicable
                        </div>
                        <a onClick={(e) => this.doPrepare(e)} className="btn btn-green uppercase">next</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
