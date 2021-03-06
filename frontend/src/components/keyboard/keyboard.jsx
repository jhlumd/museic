import React, { Component } from 'react';
import Tone from "tone";

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: null
    };

    this.notesArray = [];
    this.timeLimit = 32;

    // this.resetSnippet = this.resetSnippet.bind(this);
    this._handleRelease = this._handleRelease.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tempNotes === null) {
      this.notesArray = [];
      this.setState({ notes: null });
    }
  }

  componentDidMount() {
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();
    const piano = document.getElementById("piano");

    piano.addEventListener(
      "mousedown",
      () => setTimeout(() => this._handleRelease(synth), 8000),
      { once: true }
    );

    piano.addEventListener("mousedown", e => {
      const key = e.target;

      synth.triggerAttack(key.dataset.note);

      this.notesArray.push({
        pitch: key.dataset.note,
        unadjStartTime: Math.ceil(Tone.now() * 4)
      });
      const lastNoteDown = this.notesArray[this.notesArray.length - 1];
      lastNoteDown.startTime =
        lastNoteDown.unadjStartTime - this.notesArray[0].unadjStartTime;

      if (lastNoteDown.startTime < this.timeLimit) {
        const newSnippet = this.notesArray.slice();
        this.setState({ notes: newSnippet });
        this.props.saveTempNotes(newSnippet);
      }
    });

    piano.addEventListener("mouseup", e => {
      this._handleRelease(synth);
    });

    // add event listeners to keys for animation
    const keys = piano.children;

    for (let key of keys) {
      key.addEventListener("mousedown", () => {
        key.classList.add('pressed');
      });
      key.addEventListener("mouseup", () => {
        key.classList.remove('pressed');
      });
      key.addEventListener("tap", () => {
        key.classList.toggle('pressed');
      });
      key.addEventListener("mouseout", () => {
        key.classList.remove('pressed');
      });
    }
  }

  _handleRelease(synth) {
    synth.triggerRelease();
    const lastNoteUp = this.notesArray[this.notesArray.length - 1];

    if (lastNoteUp) {
      const dur = Math.ceil(Tone.now() * 4 - lastNoteUp.unadjStartTime);
      lastNoteUp.duration = dur === -0 ? 1 : dur;

      if (lastNoteUp.startTime + lastNoteUp.duration <= this.timeLimit) {
        const newSnippet = this.notesArray.slice();

        this.setState({ notes: newSnippet });

        this.props.saveTempNotes(newSnippet);
      } else if (lastNoteUp.startTime < this.timeLimit) {
        lastNoteUp.duration = this.timeLimit - lastNoteUp.startTime;

        const newSnippet = this.notesArray.slice();

        this.setState({ notes: newSnippet });

        this.props.saveTempNotes(this.state.notes);
      }
    }
  }

  render() {
    return (
      <div className="keyboard-container">
        <ul id="piano">
          <li data-note="C5" className="key"></li>
          <li data-note="C#5" className="black-key b-1"></li>
          <li data-note="D5" className="key"></li>
          <li data-note="D#5" className="black-key b-2"></li>
          <li data-note="E5" className="key"></li>
          <li data-note="F5" className="key"></li>
          <li data-note="F#5" className="black-key b-4"></li>
          <li data-note="G5" className="key"></li>
          <li data-note="G#5" className="black-key b-5"></li>
          <li data-note="A5" className="key"></li>
          <li data-note="A#5" className="black-key b-6"></li>
          <li data-note="B5" className="key"></li>
          <li data-note="C6" className="key"></li>
        </ul>
      </div>
    );
  }
}

