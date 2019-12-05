import React, { Component } from 'react';
import Tone from "tone";
import PlayBtnIcon from '../resources/play_btn_icon';
import StopIcon from '../resources/stop_icon';

export default class InteractionBarPlay extends Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isPlaying) {
      this.handleStop();
    }
  }

  handleStop() {
    if (this.props.isPlaying) {
      this.props.pausePlayback();
    }

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

    setTimeout(this.handleStop, 8000);
  }

  render() {
    const playButton = <PlayBtnIcon handlePlay={this.handlePlay} />;
    const stopButton = <StopIcon handleStop={this.handleStop} />;

    return (
      <div className="interaction-bar-left">
        {this.props.isPlaying ? stopButton : playButton}
      </div>
    );
  }
}
