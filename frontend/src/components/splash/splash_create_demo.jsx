import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayPlayOnlyContainer from '../snippet_display/snippet_display_play_only_container';
import KeyboardContainer from '../keyboard/keyboard_container';

export default class SplashCreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNotes: this.props.tempNotes
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentNotes: nextProps.tempNotes
    });
  }

  render() {
    const message0 =
      "Try clicking the tiles, or pressing some keys to make some music.";
    const message1 = "There you go! Keep going.";
    const message2 = "Hey that sounds pretty nice.";
    const message3 = "Nice! Let's save that masterpiece.";
    let snipTime = 0;
    if (this.state.currentNotes && this.state.currentNotes.length > 0) {
      snipTime = this.state.currentNotes[this.state.currentNotes.length - 1]
        .startTime;
    }

    let message;
    if (snipTime === 0) {
      message = message0;
    } else if (snipTime > 0 && snipTime < 14) {
      message = message1;
    } else if (snipTime >= 14 && snipTime < 23) {
      message = message2;
    } else if (snipTime > 23) {
      message = message3;
    }

    return (
      <div id='splash-create-demo-container'>

        <div className='splash-create-demo-message'>
          <p>{message}</p>
        </div>

        <SnippetDisplayPlayOnlyContainer snippet={this.state.currentNotes} />
        <KeyboardContainer />
        
        <div className='next'>
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-signup-container')}>
            <DownChevronIcon />
          </div>
          <p>
            Save it!
          </p>
        </div>
        
      </div>
    );
  }
}
