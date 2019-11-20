import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';

export default class SplashSnippetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSnippet: this.props.snippets[0]
    }
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(tabNum) {
    this.setState({ activeSnippet: this.props.snippets[tabNum] })
  }
  render() {
    return (
      <div id='splash-snippet-demo-container'>
        <h2>
          Check these out.
        </h2>

        <ul className='tabs-container'>
          {
            this.props.snippets.map((snippet, i) => (
              <li key={i} onClick={() => this.changeTab(i)}>
                {/* { snippet.name.toLowerCase() } */}
                { snippet }
              </li>
            ))
          }
        </ul>

        <div className='snippet-display-container'>
          <SnippetDisplayContainer snippet={this.state.activeSnippet} />
        </div>

        <div className='next'>
          <p>
            Make your own.
          </p>
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-create-demo-container')}>
            <DownChevronIcon />
          </div>
        </div>

      </div>
    )
  }
}
