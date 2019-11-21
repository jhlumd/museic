import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import MainPage from './main/main_page';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './user/profile.container'
import SnippetFormContainer from './snippets/upload/snippet_form_container';
import './stylesheets/main.scss'

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <Route path="/test" component={ProfileContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/snippets/new" component={SnippetFormContainer} />
    </Switch>
  </div>
);

export default App;
