import React, { Component } from 'react';
import SnippetBar from './_snippet_bar';

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: null
    };
  }

  // below for parent component (snippet show component) later
  // componentDidMount() {
  //   if (this.props.match.params.id) {
  //     this.props.fetchSnippet(this.props.match.params.id);
  //   } else {
  //     this.props.history.push("/snippets")
  //   }
  // }

  componentDidMount() {
    // debugger;
    this.setState({ notes: this.props.snippet });
  }

  // ??????
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
  };

  interpolateColors(color1, color2, color3, steps) {
    var stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);
    color3 = color3.match(/\d+/g).map(Number);

    for (var i = 0; i < steps; i++) {
      if (i < steps / 2) {
        interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
        
      } else {
        interpolatedColorArray.push(this.interpolateColor(color2, color3, stepFactor * i));

      }
    }

    return interpolatedColorArray;
  }

  render() {
    const color_arr = this.interpolateColors('rgb(253, 47, 47)', 'rgb(238, 98, 180)', 'rgb(56, 194, 216)', 32);
    let testNotes;
    if (this.state.notes) {
      testNotes = this.state.notes.map((note, i) => (
        <SnippetBar
          key={i}
          pitch={note.pitch}
          startTime={note.startTime}
          duration={note.duration}
          backgroundColor={color_arr[i]}
        />
      ));
    }

    return (
      <div className="snippet-display-container">
        <div className="bar-display-container">
          {testNotes}
        </div>
      </div>
    );
  }
};
