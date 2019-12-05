import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import PauseIcon from '../resources/pause_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause() {
    this.props.pausePlayback();

    Tone.Transport.stop();
    Tone.Transport.cancel();
  }

  handlePlay() {
    this.props.startPlayback();

    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();

    this.props.notes.forEach(note => {
      function triggerSynth(time) {
        synth.triggerAttackRelease(note.pitch, note.duration, time);
      }

      Tone.Transport.schedule(triggerSynth, note.startTime / 4);
    });

    Tone.Transport.start();
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
