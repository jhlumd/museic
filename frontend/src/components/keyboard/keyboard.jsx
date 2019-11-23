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
  }

  componentDidMount() {
    const synth = new Tone.Synth();
    synth.oscillator.type = "sine";
    synth.toMaster();

    const piano = document.getElementById("piano");

    piano.addEventListener("mousedown", e => {
      const key = e.target;
      
      synth.triggerAttack(key.dataset.note);

      this.notesArray.push({
        pitch: key.dataset.note,
        unadjStartTime: Math.ceil(e.timeStamp / 250)
      });
      const lastNoteDown = this.notesArray[this.notesArray.length - 1];
      lastNoteDown.startTime = lastNoteDown.unadjStartTime - this.notesArray[0].unadjStartTime;

      if (lastNoteDown.startTime < this.timeLimit) {
        const newSnippet = this.notesArray.slice();

        this.setState({ notes: newSnippet });
        this.props.updateSnippet(newSnippet);
      }
      // There may be a case where 'saveTempNotes(this.state.notes)' isn't
      // called when only one note is played and held for the entire duration.
    });

    piano.addEventListener("mouseup", e => {
      
      synth.triggerRelease();

      const lastNoteUp = this.notesArray[this.notesArray.length - 1];
      const dur = Math.ceil(e.timeStamp / 250 - lastNoteUp.unadjStartTime);
      lastNoteUp.duration = (dur === -0 ? 1 : dur);

      if (lastNoteUp.startTime + lastNoteUp.duration <= this.timeLimit) {
        const newSnippet = this.notesArray.slice();

        this.setState({ notes: newSnippet });
        this.props.updateSnippet(newSnippet);

        this.props.saveTempNotes(this.state.notes);

      } else if (lastNoteUp.startTime < this.timeLimit) {
        lastNoteUp.duration = this.timeLimit - lastNoteUp.startTime;
        
        const newSnippet = this.notesArray.slice();

        this.setState({ notes: newSnippet });
        this.props.updateSnippet(newSnippet);

        this.props.saveTempNotes(this.state.notes);

      }
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
  
  render() {
    return (
      <div className='keyboard-container'>
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
          <li data-note="C6" className="key">
          </li>
        </ul>
      </div>
    );
  }
}

