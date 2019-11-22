import React, { Component } from 'react';
import KeyboardContainer from '../../keyboard/keyboard_container'; // testing

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.tempNotes) {
            this.setState({
                notes: this.props.tempNotes
            });
            this.props.saveSnippet(this.state);
            this.props.clearTempNotes();
        } else {
            this.setState({
                errors: ["No snippet to save."]
            });
        }
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
        let publicBool = Boolean(this.state.public);
        if (publicBool.toString() !== e.currentTarget.value) {
            this.setState({ public: !this.state.public });
        }
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

                <KeyboardContainer />
            </div>
        );
    }
}
