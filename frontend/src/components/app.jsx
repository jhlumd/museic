import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Modal from './session/modal';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import NavbarContainer from './nav/navbar_container';
import NavbarNoSessionContainer from './nav/navbar_no_session_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';

import SnippetFormContainer from './snippet_form/snippet_form_container';
import SnippetIndexContainer from './snippet_index/snippet_index_container';
// import SnippetShowContainer from './snippets/snippet_show_container';

import UserShowContainer from './user/user_show_container';

import './stylesheets/main.scss'


const App = () => (
  <div>
    <header>
    <Modal />
    <Switch>
      <AuthRoute exact path='/' component={NavbarNoSessionContainer} />
      <ProtectedRoute path='/' component={NavbarContainer} />
    </Switch>
    </header>

    <Switch>
      <ProtectedRoute exact path="/profile/:id" component={UserShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/snippets/index" component={SnippetIndexContainer} />
      <ProtectedRoute exact path="/snippets/new" component={SnippetFormContainer} />
      {/* <Route exact path="/snippets/:id" component={ SnippetShowContainer} /> */}
      {/* test upload */}
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
    
    <Footer />
  </div>
);

export default App;
