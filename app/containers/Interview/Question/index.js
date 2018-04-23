/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { getStd } from 'utils/helper';
import Img from '../../../components/Img';

export default class InterviewQuestion extends React.Component {
  constructor(props) {
    super(props)
    let std = getStd(props);
    let anwsers = JSON.parse(localStorage.getItem('interviewAnwsers'));
    console.log(anwsers[std]);
  }
  componentDidMount() {
    
  }
  render() {
    return (
        <div className="central-wrap">
            <Helmet>
                <title>Question</title>
                <meta name="description" content="Central Test" />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">Question 1</h2>
                    <div className="page-desc">
                        <p>
                            In the next page, you will be given 30 seconds to read a Pratice Interview Question before your recording begins automatically.
                        </p>
                        <p>
                            This is your first question and There is a total of 2 questions to complete in this interview and you are given 3 minutes for this question.
                        </p>
                        <p>
                            When you are ready, please click "Next"
                        </p>
                    </div>
                    <div className="btn-wrap">
                        <div className="time-submiss">
                            Submission Deadline: Not Applicable
                        </div>
                        <a href="/prepare" className="btn btn-green uppercase">next</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
