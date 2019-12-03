import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import PauseIcon from '../resources/pause_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   playing: false
    // };
    this.playing = false;

    // debugger;

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause() {
    // this.setState = {
    //   playing: false
    // };
    this.playing = false;
    Tone.Transport.cancel();
    debugger;
  }

  handlePlay() {
    // this.setState = {
    //   playing: true
    // };
    this.playing = true;
    // debugger;


    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();

    const now = Tone.now();

    this.props.notes.forEach(note => {
      Tone.Transport.schedule(
        synth.triggerAttackRelease(
          note.pitch,
          note.duration / 4,
          now + note.startTime / 4
        )
      );
    });
  }
  
  render() {
    const playButton = <PlayBtnIcon handlePlay={this.handlePlay} />;
    const pauseButton = <PauseIcon handlePlay={this.handlePause} />;

    return (
      <div className="interaction-bar-left">
        {this.playing ? pauseButton : playButton}
      </div>
    );
  }
}
