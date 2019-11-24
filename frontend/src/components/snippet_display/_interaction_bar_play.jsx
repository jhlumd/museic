import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();
    const now = Tone.now();

    // debugger;

    this.props.notes.forEach(note => {
      synth.triggerAttackRelease(
        note.pitch,
        note.duration / 4,
        now + note.startTime / 4
      );
    });
  }

  handlePause() {
    
  }
  
  render() {
    return (
      <div className="interaction-bar-left">
        <PlayBtnIcon handlePlay={this.handlePlay} />
      </div>
    )
  }
}

{/* <div className="interaction-bar-container">
  <InteractionBarPlay />
  AND/OR
  <InteractionBarLikeShare />
</div> */}