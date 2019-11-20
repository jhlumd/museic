import React, { Component } from 'react';
// import Tone from "tone";

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

    }

    componentDidUpdate(prevProps) {

    }
    
    render() {
        return (
            <div className="snippet-form-container">
                


                
            </div>
        );
    }
}
