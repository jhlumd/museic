import React, { Component } from 'react';
import SnippetBar from './_snippet_bar';
import InteractionBarPlay from "./_interaction_bar_play";
import InteractionBarLikeShare from "./_interaction_bar_like_share";

export default class SnippetDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.snippet,
      timestamp: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ notes: nextProps.snippet });

    if (nextProps.isPlaying) {
      let timer = window.setInterval(() => {
        this.setState({ timestamp: this.state.timestamp + 1 });

        // stop the timer after 8 seconds
        if (this.state.timestamp > 499) {
          clearInterval(timer);
          this.setState({ timestamp: 500 });
        }
      }, 16);
    }
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

    const progressBarStyle = {
      left: (this.state.timestamp / 500) * 100 + "%"
    };

    return (
      <div className="snippet-display-container">
        <div className="bar-display-container">
          <div className="progress-bar" style={progressBarStyle}></div>
          {noteBars}
        </div>

        <div className="interaction-bar-container">
          <InteractionBarPlay
            notes={this.props.snippet}
            isPlaying={this.props.isPlaying}
            startPlayback={this.props.startPlayback}
            pausePlayback={this.props.pausePlayback}
          />
          <InteractionBarLikeShare
            liked={this.props.liked}
            likeId={likeId}
            snippetId={snippetId}
            userId={this.props.userId}
            addLike={this.props.addLike}
            unlike={this.props.unlike}
          />
        </div>
      </div>
    );
  }
};
