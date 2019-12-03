import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import PauseIcon from '../resources/pause_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);

    this.now = Tone.now();

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause() {
    this.props.pausePlayback();
    Tone.Transport.pause(this.now);
    // debugger;
  }

  handlePlay() {
    this.props.startPlayback();
    // debugger;

    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();

    this.now = Tone.now();

    this.props.notes.forEach(note => {
      Tone.Transport.schedule(
        synth.triggerAttackRelease(
          note.pitch,
          note.duration / 4,
          this.now + note.startTime / 4
        )
      );
    });
  }
  
  render() {
    const playButton = <PlayBtnIcon handlePlay={this.handlePlay} />;
    const pauseButton = <PauseIcon handlePause={this.handlePause} />;

    return (
      <div className="interaction-bar-left">
        {this.props.isPlaying ? pauseButton : playButton}
      </div>
    );
  }
}
