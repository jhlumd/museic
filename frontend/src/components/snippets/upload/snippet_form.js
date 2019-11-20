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
            notes: null,
            errors: []
        };

        this.notesArray = [];

        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // NEED TO WRITE

        const adjNotesArr = this.notesArray.map();
        this.setState({
            notes: adjNotesArr
        });
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
                unadjStartTime: e.timeStamp
            });
        });

        piano.addEventListener("mouseup", e => {
            synth.triggerRelease();

            let lastNote = this.notesArray[this.notesArray.length - 1];
            lastNote.duration = e.timeStamp - lastNote.unadjStartTime;
        });
    }

    componentDidUpdate(prevProps) {

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
                        checked={this.state.public}
                        onChange={this.handlePrivacy}
                    />

                    <input type="submit" value="Submit" />
                </form>

                <ul id="piano">
                    <li data-note="C4" class="key">
                        <div data-note="C#4" class="black-key"></div>
                    </li>
                    <li data-note="D4" class="key">
                        <div data-note="D#4" class="black-key"></div>
                    </li>
                    <li data-note="E4" class="key">
                    </li>
                    <li data-note="F4" class="key">
                        <div data-note="F#4" class="black-key"></div>
                    </li>
                    <li data-note="G4" class="key">
                        <div data-note="G#4" class="black-key"></div>
                    </li>
                    <li data-note="A4" class="key">
                        <div data-note="A#4" class="black-key"></div>
                    </li>
                    <li data-note="B4" class="key">
                    </li>
                    <li data-note="C5" class="key">
                        <div data-note="C#5" class="black-key"></div>
                    </li>
                    <li data-note="D5" class="key">
                        <div data-note="D#5" class="black-key"></div>
                    </li>
                    <li data-note="E5" class="key">
                    </li>
                    <li data-note="F5" class="key">
                        <div data-note="F#5" class="black-key"></div>
                    </li>
                    <li data-note="G5" class="key">
                        <div data-note="G#5" class="black-key"></div>
                    </li>
                    <li data-note="A5" class="key">
                        <div data-note="A#5" class="black-key"></div>
                    </li>
                    <li data-note="B5" class="key">
                    </li>
                </ul>
                
            </div>
        );
    }
}
