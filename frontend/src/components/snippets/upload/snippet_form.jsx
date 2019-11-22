import React, { Component } from 'react';
import Tone from "tone";
import './piano.css';

export default class SnippetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            public: true,
            notes: null,
            errors: []
        };

        this.notesArray = [];
        this.timeLimit = 32;

        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveSnippet(this.state);
    }

    handleChange(field) {
        return e => {
            if (field === "title" && e.currentTarget.value === "") {
                this.setState({
                    [field]: e.currentTarget.value,
                    errors: ["Enter a title."]
                });
            } else {
                this.setState({
                    [field]: e.currentTarget.value
                });
            }
        };
    }

    handlePrivacy(e) {
        let pubBool = Boolean(this.state.public);
        if (pubBool.toString() !== e.currentTarget.value) {
            this.setState({ public: !this.state.public });
        }
    }

    componentDidMount() {
        const synth = new Tone.Synth();
        synth.oscillator.type = "sine";
        synth.toMaster();

        const piano = document.getElementById("piano");

        piano.addEventListener("mousedown", e => {
            synth.triggerAttack(e.target.dataset.note);

            this.notesArray.push({
                pitch: e.target.dataset.note,
                unadjStartTime: Math.ceil(e.timeStamp / 250)
            });
            const lastNoteDown = this.notesArray[this.notesArray.length - 1];
            lastNoteDown.startTime = lastNoteDown.unadjStartTime - this.notesArray[0].unadjStartTime;

            if (lastNoteDown.startTime < this.timeLimit) {
                this.setState({
                    notes: this.notesArray.slice()
                });
            }
        });

        piano.addEventListener("mouseup", e => {
            synth.triggerRelease();

            const lastNoteUp = this.notesArray[this.notesArray.length - 1];
            const dur = Math.ceil(e.timeStamp / 250 - lastNoteUp.unadjStartTime);
            lastNoteUp.duration = (dur === -0 ? 1 : dur);

            if (lastNoteUp.startTime + lastNoteUp.duration <= this.timeLimit) {
                this.setState({
                    notes: this.notesArray.slice()
                });
            } else if (lastNoteUp.startTime < this.timeLimit) {
                lastNoteUp.duration = this.timeLimit - lastNoteUp.startTime;
                this.setState({
                    notes: this.notesArray.slice()
                });
            }
        });
    }
    
    render() {
        return (
            <div className="snippet-form-container">
                
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange("title")}
                        placeholder="Name your snippet"
                    />
                    
                    <input
                        type="textarea"
                        value={this.state.description}
                        onChange={this.handleChange("description")}
                        placeholder="Describe your snippet"
                    />

                    <input
                        type="radio"
                        name="public"
                        value="true"
                        checked={this.state.public}
                        onChange={this.handlePrivacy}
                    />
                    
                    <input
                        type="radio"
                        name="public"
                        value="false"
                        checked={!this.state.public}
                        onChange={this.handlePrivacy}
                    />

                    <input type="submit" value="Submit" />
                </form>

                <ul id="piano">
                    <li data-note="C5" className="key">
                        <div data-note="C#5" className="black-key"></div>
                    </li>
                    <li data-note="D5" className="key">
                        <div data-note="D#5" className="black-key"></div>
                    </li>
                    <li data-note="E5" className="key">
                    </li>
                    <li data-note="F5" className="key">
                        <div data-note="F#5" className="black-key"></div>
                    </li>
                    <li data-note="G5" className="key">
                        <div data-note="G#5" className="black-key"></div>
                    </li>
                    <li data-note="A5" className="key">
                        <div data-note="A#5" className="black-key"></div>
                    </li>
                    <li data-note="B5" className="key">
                    </li>
                    <li data-note="C6" className="key">
                    </li>
                </ul>
                
            </div>
        );
    }
}
