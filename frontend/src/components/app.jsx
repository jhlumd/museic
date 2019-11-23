import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Modal from './session/modal';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import NavBarContainer from './nav/navbar_container';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './user/profile.container';
import Footer from './footer/footer';

import SnippetFormContainer from './snippet_form/snippet_form_container';
import SnippetIndexContainer from './snippet_index/snippet_index_container';
// import SnippetShowContainer from './snippets/snippet_show_container';

import './stylesheets/main.scss'


const App = () => (
  <div>
    <header>
    <Modal />
    <NavBarContainer />
    </header>

    <Switch>
      <Route path="/test" component={ProfileContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/snippets/index" component={SnippetIndexContainer} />
      <ProtectedRoute exact path="/snippets/new" component={SnippetFormContainer} />
      {/* <Route exact path="/snippets/:id" component={ SnippetShowContainer} /> */}
      <AuthRoute exact path="/" component={SplashContainer} />
      <Footer />
    </Switch>
  </div>
);

export default App;
