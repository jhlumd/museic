import React, { Component } from 'react';
import Tone from "tone";


const synth = new Tone.Synth();
export default class SnippetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            public: true,
            notes: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    componentDidMount() {
        const synth = new Tone.Synth();
        synth.oscillator.type = "sine";
        synth.toMaster();

        const piano = document.getElementById("piano");

        piano.addEventListener("mousedown", e => {
            synth.triggerAttack(e.target.dataset.note);

            console.log(e.timeStamp);
            console.log(e.target.dataset);
            console.log(e.target.dataset.note);

            // this.state.notes.push({
            //     pitch: e.target.dataset.note,
            //     startTime: 0,
            //     duration: 0.2
            // });
        });

        piano.addEventListener("mouseup", e => {
            synth.triggerRelease();
            // console.log(e);
        });
    }

    componentDidUpdate(prevProps) {

    }
    
    render() {
        return (
            <div className="snippet-form-container">
                

                <ul id="piano">
                    <li data-note="C4" className="key">
                        <div data-note="C#4" className="black-key">R</div>
                        D
                    </li>
                    <li data-note="D4" className="key">
                        <div data-note="D#4" className="black-key">T</div>
                        F
                    </li>
                    <li data-note="E4" className="key">
                        G
                    </li>
                    <li data-note="F4" className="key">
                        <div data-note="F#4" className="black-key">U</div>
                        H
                    </li>
                    <li data-note="G4" className="key">
                        <div data-note="G#4" className="black-key">I</div>
                        J
                    </li>
                    <li data-note="A4" className="key">
                        <div data-note="A#4" className="black-key">O</div>
                        K
                    </li>
                    <li data-note="B4" className="key">
                        L
                    </li>
                </ul>
                
            </div>
        );
    }
}
