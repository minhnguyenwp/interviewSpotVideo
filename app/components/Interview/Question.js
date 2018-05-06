/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { nth, myFormatDate } from 'utils/helper';
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
        this.props.doPrepare();
    }
  }
  render() {
    const {sessionData, qNum, isPractice} = this.props
    let number = qNum + 1

    let deadline = isPractice ? 'Not Applicable' : myFormatDate('dd-mm-yyyy', sessionData.deadline)
    let readingTimeLimit = sessionData.answers[qNum].readingTimeLimit
    let answerTimeLimit = Math.round(sessionData.answers[qNum].answerTimeLimit/60)
    let title = sessionData.title

    // if(isPractice){
    //     deadline = 'Not Applicable'
    //     if(!practice){       
    //         readingTimeLimit = session.practice.answers[qNum].readingTimeLimit
    //         answerTimeLimit = Math.round(session.practice.answers[qNum].answerTimeLimit/60)
    //         title = session.practice.title
    //     } else {
    //         readingTimeLimit = practice.answers[qNum].readingTimeLimit
    //         answerTimeLimit = Math.round(practice.answers[qNum].answerTimeLimit/60)
    //         title = practice.title
    //     }
    // } 
    return (
        <div className="central-wrap">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">{title}</h2>
                    <div className="page-desc">
                        <p>
                            In the next page, you will be given <span>{readingTimeLimit}</span> seconds to read a Pratice Interview Question before your recording begins automatically.
                        </p>
                        <p>
                            This is your <span>{number + nth(number)}</span> question and There is a total of <span>{sessionData.answers.length}</span> questions to complete in this interview and you are given <span>{answerTimeLimit}</span> minutes for this question.
                        </p>
                        <p>
                            When you are ready, please click "Next"
                        </p>
                    </div>
                    <div className="btn-wrap">
                        <div className="time-submiss">
                            {'Submission Deadline: ' + deadline} 
                        </div>
                        <a onClick={(e) => this.doPrepare(e)} className="btn btn-green uppercase">next</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
