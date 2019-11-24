import React, { Component } from 'react';
import SnippetBar from './_snippet_bar';
import InteractionBar from './_interaction_bar';

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.snippet
    };
  }

  componentWillReceiveProps() {
    this.setState({ notes: this.props.snippet });
  }

  interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
      factor = 0.5;
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for (var i = 0; i < steps; i++) {
      interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
  }

  render() {
    let color_arr = this.interpolateColors('rgb(56, 194, 216)', 'rgb(238, 98, 180)', 8)
      .concat(this.interpolateColors('rgb(238, 98, 180)', 'rgb(253, 47, 47)', 8));
    color_arr = color_arr.concat(color_arr.slice().reverse());
    
    let testNotes;
    if (this.state.notes) {
      testNotes = this.state.notes.map((note, i) => (
        <SnippetBar
          key={i}
          pitch={note.pitch}
          startTime={note.startTime}
          duration={note.duration}
          backgroundColor={color_arr[i % 32]}
        />
      ));
    }


    return (
      <div className="snippet-display-container">
        <div className="bar-display-container">
          {noteBars}
        </div>
        
        <InteractionBar notes={this.props.snippet} />
      </div>
    );
  }
};
