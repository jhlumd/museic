import React, { Component } from 'react';
import SplashIntro from './splash_intro';
import SplashSnippetDemo from './splash_snippet_demo';
import SplashCreateDemo from './splash_create_demo';
import SplashSignup from './splash_signup';
import SplashTeamIntro from './splash_team_intro';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapTo: '#splash-intro-container'
    }
    this.snapTo = this.snapTo.bind(this);
  }
  componentDidMount() {
    // this.props.snippets.forEach(snippetId => {
    //   this.props.fetchSnippet(snippetId);   
    // });
  }
  snapTo(location) {
    var element = document.getElementById(location);
    element.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div id='splash-container'>

        <section>
          <SplashIntro snapTo={this.snapTo} />
        </section>
        <section>
          <SplashSnippetDemo snippets={this.props.snippets} snapTo={this.snapTo} />
        </section>
        <section>
          <SplashCreateDemo snapTo={this.snapTo} />
        </section>
        <section>
          <SplashSignup snapTo={this.snapTo} history={this.props.history} />
        </section>
        <section>
          <SplashTeamIntro snapTo={this.snapTo} />
        </section>
        
      </div>
    )
  }
}
