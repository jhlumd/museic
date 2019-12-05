import React, { Component } from 'react';

export default class SnippetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            notes: this.props.tempNotes,
            public: true,
            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.tempNotes) {
            this.props.saveSnippet(Object.assign(
                this.state,
                { notes: this.props.tempNotes }
            ));

            this.props.clearTempNotes();
            this.setState({
                title: "",
                description: "",
                notes: null,
                public: true,
                errors: []
            });
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
        if (publicBool.toString() !== e.currentTarget.checked) {
            this.setState({ public: !this.state.public });
        }
    }
    
    render() {
        return (
            <div className="snippet-form-container slide-in-bottom">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange("title")}
                        placeholder="Name your snippet."
                    />
                    
                    <input
                        type="textarea"
                        value={this.state.description}
                        onChange={this.handleChange("description")}
                        placeholder="Describe your snippet."
                    />

                    <label> 
                        <input
                            name="private"
                            type="checkbox"
                            checked={!this.state.public}
                            onChange={this.handlePrivacy}
                        /> Private
                    </label>

                    <button className='make-new-snippet-btn hvr-grow' type="submit">Save Snippet</button>
                </form>
            </div>
        );
    }
}
