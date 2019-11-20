import React, { Component } from 'react'
import PlayBtnIcon from '../resources/play_btn_icon';
import HeartIcon from '../resources/heart_icon';
import ShareIcon from '../resources/share_icon';

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state= {
      snippet: this.props.snippet
    }
  }
  handlePlay() {
    // FIXME handle play button function
  }
  render() {
    return (
      <div className='snippet-display-container'>
        <div className='bar-display-container'>

        </div>
        <div className='interaction-bar-container'>

          <div className='interaction-bar-left'>
            <PlayBtnIcon onClick={() => this.handlePlay()} />
          </div>

          <div className='interaction-bar-right'>
            {/* FIXME <HeartIcon onClick={this.props.addLike(this.props.user.id), this.props.snippet.id} /> */}
            <HeartIcon />
            {/* FIXME add sharing function */}
            <ShareIcon />
          </div>

        </div>
      </div>
    )
  }
}
