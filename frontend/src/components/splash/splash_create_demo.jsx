import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';
import KeyboardContainer from '../keyboard/keyboard_container';

export default class SplashCreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSnippet: [],
      message: ''
    }
    this.updateSnippet = this.updateSnippet.bind(this);
  }
  componentDidMount() {
    const message0 = 'Try clicking the tiles, or pressing some keys to make some music.'
    this.setState({ message: message0 })
  }
  componentDidUpdate() {
    const message0 = 'Try clicking the tiles, or pressing some keys to make some music.'
    const message1 = 'There you go! Keep going.';
    const message2 = 'Hey that sounds pretty nice.';
    const message3 = 'Nice! Let\'s save that masterpiece.';
    const snipLen = this.state.currentSnippet.length;

    let message;

    if (snipLen === 0) {
      message = message0;
    } else if (snipLen < 3) {
      message = message1;
    } else if (snipLen < 8) {
      message = message2;
    } else {
      message = message3;
    }

    this.setState({ message })
  }
  updateSnippet(newSnippet) {
    this.setState({ currentSnippet: newSnippet })
  }
  render() {
    return (
      <div id='splash-create-demo-container'>

        <div className='splash-create-demo-message'>
          <p>{ this.state.message }</p>
        </div>

        <SnippetDisplayContainer snippet={this.state.currentSnippet} />
        <KeyboardContainer updateSnippet={this.updateSnippet} />
        
        <div className='next'>
          <p>
            Save it!
          </p>
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-signup-container')}>
            <DownChevronIcon />
          </div>
        </div>
        
      </div>
    )
  }
}
