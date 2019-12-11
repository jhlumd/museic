import React, { Component } from 'react';
import SnippetBar from './_snippet_bar';
import InteractionBarPlay from "./_interaction_bar_play";
import InteractionBarLikeShare from "./_interaction_bar_like_share";

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.snippet
    };

    this.startProgBar = this.startProgBar.bind(this);
    this.resetProgBar = this.resetProgBar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ notes: nextProps.snippet });
  }

  interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
      factor = 0.5;
    }
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  interpolateColors(color1, color2, steps) {
    let stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for (let i = 0; i < steps; i++) {
      interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
  }

  startProgBar() {
    document.querySelector(".progress-bar-2").classList.add("move");
  }

  resetProgBar() {
    document.querySelector(".progress-bar-2").classList.remove("move");
  }

  render() {
    let color_arr = this.interpolateColors('rgb(56, 194, 216)', 'rgb(238, 98, 180)', 8)
      .concat(this.interpolateColors('rgb(238, 98, 180)', 'rgb(253, 47, 47)', 8));
    color_arr = color_arr.concat(color_arr.slice().reverse());
    
    let { snippetId } = this.props;
    let likeId = '';
    if (this.props.likes[snippetId]) {
      this.props.likes[snippetId].forEach( like => {
        if( like.user === this.props.userId){
          likeId = like.id;
        }
      });
      // likeId = this.props.likes[snippetId][this.props.userId].id
    }

    const noteBars = this.state.notes.map((note, i) => (
      <SnippetBar
        key={i}
        pitch={note.pitch}
        startTime={note.startTime}
        duration={note.duration}
        backgroundColor={color_arr[i % 32]}
      />
    ));

    return (
      <div className="snippet-display-container">
        <div className="bar-display-container">
          <div className="progress-bar progress-bar-2"></div>
          {noteBars}
        </div>

        <div className="interaction-bar-container">
          <InteractionBarPlay
            notes={this.props.snippet}
            isPlaying={this.props.isPlaying}
            startPlayback={this.props.startPlayback}
            pausePlayback={this.props.pausePlayback}
            startProgBar={this.startProgBar}
            resetProgBar={this.resetProgBar}
          />
          <InteractionBarLikeShare
            liked={this.props.liked}
            likeId={likeId}
            snippetId={snippetId}
            userId={this.props.userId}
            addLike={this.props.addLike}
            unlike={this.props.unlike}
            openModal={this.props.openModal}
          />
        </div>
      </div>
    );
  }
};
