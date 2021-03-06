import React, { Component } from "react";
import DownChevronIcon from "../resources/down_chevron_icon";
import SnippetDisplayContainer from "../snippet_display/snippet_display_container";
import KeyboardContainer from "../keyboard/keyboard_container";

export default class SplashCreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNotes: this.props.tempNotes,
      snipTime: 0,
    };
  }

  componentDidMount() {
    // This section will listen for when the user first clicks on a note
    const piano = document.getElementById("piano");
    piano.addEventListener("click", () => this._setUpdate(), { once: true });

    const reset = document.querySelector(".keyboard-reset-button");
    reset.addEventListener("click", () => {
      this.setState({ snipTime: 0 });
      const piano = document.getElementById("piano");
      piano.addEventListener("click", () => this._setUpdate(), { once: true });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentNotes: nextProps.tempNotes,
    });
    // reset snip time if user reset keyboard
    if (!this.state.currentNotes) {
      this.setState({ snipTime: 0 });
    }
  }

  _setUpdate() {
    let timer = window.setInterval(() => {
      this.setState({ snipTime: this.state.snipTime + 1 });

      // stop the timer after 8 seconds
      if (this.state.snipTime > 7) {
        clearInterval(timer);
        this.setState({ snipTime: 8 });
      }
    }, 1000);
  }

  writeMessage() {
    const message0 = "Play the piano to make some music.";
    const message1 = "There you go! Keep going.";
    const message2 = "Hey that sounds pretty nice.";
    const message3 = "Nice! Let's save that masterpiece.";
    const message4 = "You ran out of time. Click 'Reset' to go again.";

    let snipTime = this.state.snipTime;

    let message;
    if (snipTime === 0) {
      message = message0;
    } else if (snipTime < 3) {
      message = message1;
    } else if (snipTime < 5) {
      message = message2;
    } else if (
      this.state.currentNotes &&
      snipTime <= 7 &&
      this.state.currentNotes.length > 3
    ) {
      message = message3;
    } else if (snipTime > 7) {
      message = message4;
    }
    return message;
  }

  render() {
    return (
      <div id="splash-create-demo-container">
        <div className="splash-create-demo-message">
          <h2>
            You have
            <span className="countdown">{8 - this.state.snipTime}</span>
            seconds to record
          </h2>
          <p>{this.writeMessage()}</p>
        </div>

        <SnippetDisplayContainer
          displayType="create"
          snippet={this.state.currentNotes}
        />
        <KeyboardContainer />

        <div className="next">
          <div
            className="down-chevron"
            onClick={() => this.props.snapTo("splash-signup-container")}
          >
            <DownChevronIcon />
          </div>
          <p>Save it!</p>
        </div>
      </div>
    );
  }
}
