import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import PauseIcon from '../resources/pause_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);
    
    this.playNow = null;

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause() {
    this.props.pausePlayback();

    // debugger;

    Tone.Transport.toggle();
    Tone.Transport.cancel();

    // debugger;
  }

  handlePlay() {
    this.props.startPlayback();
    // debugger;
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();

    // this.playNow = Tone.now();

    // function triggerSynth(time) {
    //   synth.triggerAttackRelease("C5", "8n", time);
    // }

    this.props.notes.forEach(note => {
      function triggerSynth(time) {
        synth.triggerAttackRelease(note.pitch, note.duration, time);
      }

      Tone.Transport.schedule(triggerSynth, note.startTime / 4);
    });

    Tone.Transport.toggle();
    // debugger;
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
