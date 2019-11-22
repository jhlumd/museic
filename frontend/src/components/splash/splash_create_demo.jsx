import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';
import KeyboardContainer from '../keyboard/keyboard_container';

export default class SplashCreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSnippet: [],
      message: 'Try clicking the tiles, or pressing some keys to make some music.'
    }
    this.updateSnippet = this.updateSnippet.bind(this);
  }

  componentDidUpdate() { //should probably be activated by some click or something.
    const message0 = 'Try clicking the tiles, or pressing some keys to make some music.'
    const message1 = 'There you go! Keep going.';
    const message2 = 'Hey that sounds pretty nice.';
    const message3 = 'Nice! Let\'s save that masterpiece.';
    const snipLen = this.state.currentSnippet.length;
    // debugger
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

    // this.setState({ message }) 
    // can't update state in componentDidUpdate, 
    // will cause infinite loop!
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
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-signup-container')}>
            <DownChevronIcon />
          </div>
          <p>
            Save it!
          </p>
        </div>
        
      </div>
    )
  }
}
