/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// comp upload
import UploadFail from 'containers/UploadVideos/Error/Loadable';
import UploadSuccess from 'containers/UploadVideos/Success/Loadable';
import UploadProgress from 'containers/UploadVideos/Progress/Loadable';

// comp interview
import InterviewQuestion from 'containers/Interview/Question/Loadable';
import InterviewPrepare from 'containers/Interview/Prepare/Loadable';
import InterviewRecording from 'containers/Interview/Recording/Loadable';

const AppWrapper = styled.div`
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Central Test"
        defaultTitle="Central Test"
      >
        <meta name="description" content="Central Test" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        {/* route upload */}
        <Route path="/upload-fail" component={UploadFail} />
        <Route path="/upload-success" component={UploadSuccess} />
        <Route path="/upload" component={UploadProgress} />

        {/* route interview */}
        <Route path="/question" component={InterviewQuestion} />
        <Route path="/prepare" component={InterviewPrepare} />
        <Route path="/recording" component={InterviewRecording} />

        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
