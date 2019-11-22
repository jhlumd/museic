import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import HeartIcon from '../resources/heart_icon';
import ShareIcon from '../resources/share_icon';

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippet: this.props.snippet
    };

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchSnippet(this.props.match.params.id)
        .then(
          () => console.log('Snippet fetched'),
          () => this.props.history.push('/snippets')
        );
    }
  }

  handlePlay() {
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();


    synth.triggerAttackRelease('C4', 0.5, 0);
    synth.triggerAttackRelease('E4', 0.5, 1);
    synth.triggerAttackRelease('G4', 0.5, 2);
    synth.triggerAttackRelease('B4', 0.5, 3);
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
};
