import React, { Component } from 'react';

export default class InteractionBarReset extends Component {
  constructor(props) {
    super(props);

    this.resetSnippet = this.resetSnippet.bind(this);
  }

  resetSnippet() {
    this.props.clearTempNotes();
  }
  
  render() {
    return (
      <div className="interaction-bar-right">
        <button
          className="keyboard-reset-button hvr-grow"
          onClick={this.resetSnippet}
        >
          Reset
        </button>
      </div>
    );
  }
}
