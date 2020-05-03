import React from "react";
import { withRouter } from "react-router-dom";
import NavbarUserDropdown from "./navbar_user_dropdown";
import SnippetDisplayContainer from "../snippet_display/snippet_display_container";
import KeyboardContainer from "../keyboard/keyboard_container";
import SnippetFormContainer from "../snippet_form/snippet_form_container";
import Logo from "../resources/logo";
import DownChevronIcon from "../resources/down_chevron_icon";
import UserIcon from "../resources/user_icon";
import SearchIcon from "../resources/search_icon";
import XIcon from "../resources/x_icon";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNotes: this.props.tempNotes,
      snipTime: 0,
      input: "",
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.searchAutocomplete = this.searchAutocomplete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // This section will listen for when to move the menu up and down
    const x = document.querySelector(".x-icon-container");
    const tab = document.querySelector(".nav-base-tab-container");
    const panel = document.getElementById("nav-container");
    tab.addEventListener("click", () => {
      panel.classList.toggle("down");
      panel.classList.toggle("up");
    });
    x.addEventListener("click", () => {
      panel.classList.toggle("down");
      panel.classList.toggle("up");
    });

    // This section will listen for when the user first clicks on a note
    const piano = document.getElementById("piano");
    piano.addEventListener("mousedown", () => this._setUpdate(), {
      once: true,
    });

    const reset = document.querySelector(".keyboard-reset-button");
    reset.addEventListener("click", () => {
      this.setState({ snipTime: 0 });
      const piano = document.getElementById("piano");
      piano.addEventListener("mousedown", () => this._setUpdate(), {
        once: true,
      });
    });

    // This adds listener for pressing enter in search field
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("search-btn").click();
      }
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

  componentDidUpdate() {
    // add class on searchbar if there are any matches
    const results = document.querySelector(".search-results-container");
    if (results && results.childElementCount > 0) {
      document.querySelector(".search-container").classList.add("found");
    } else {
      document.querySelector(".search-container").classList.remove("found");
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
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

  keyboardOrForm() {
    let snipTime = this.state.snipTime;

    if (snipTime >= 8) {
      return <SnippetFormContainer />;
    } else {
      return <KeyboardContainer />;
    }
  }

  handleSearch() {
    this.props.history.push(`/search/?st=${this.state.input}`);
    this.setState({ input: "" });
  }

  handleChange(type, e) {
    this.setState({ [type]: e.currentTarget.value });
  }

  searchAutocomplete() {
    if (this.props.users.length === 0 || this.state.input.length === 0)
      return null;
    const { users, snippets } = this.props;
    const userResults = [];
    const snippetResults = {};
    const terms = this.state.input.split(" ");
    const userIds = Object.keys(users);
    terms.forEach((term) => {
      if (term.length === 0) return null;
      Object.values(users).forEach((user, i) => {
        if (
          user.length >= term.length &&
          user.slice(0, term.length).toLowerCase() === term.toLowerCase()
        ) {
          userResults.push(userIds[i]);
        }
      });

      if (term.length > 2) {
        //only do snippet title search if sub-term at least 3 chars
        snippets.forEach((snippet) => {
          for (let i = 0; i + term.length < snippet.title.length + 1; i++) {
            if (
              snippet.title.slice(i, i + term.length).toLowerCase() ===
              term.toLowerCase()
            ) {
              snippetResults[snippet._id] = snippet;
            }
          }
        });
      }
    });

    if (this.state.input.length > 2) {
      //only do snippet title search if input at least 3 chars
      snippets.forEach((snippet) => {
        for (
          let i = 0;
          i + this.state.input.length < snippet.title.length;
          i++
        ) {
          if (
            snippet.title
              .slice(i, i + this.state.input.length)
              .toLowerCase() === this.state.input.toLowerCase()
          ) {
            snippetResults[snippet._id] = snippet;
          }
        }
      });
    }

    return (
      <div className="search-results-container">
        {userResults.map((userId, i) => {
          return (
            <li
              className="user"
              key={i}
              onClick={() => {
                this.props.history.push(`/profile/${userId}`);
                this.setState({ input: "" });
              }}
            >
              {users[userId]}
            </li>
          );
        })}
        {Object.values(snippetResults).map((snippet, i) => {
          return (
            <li
              className="snippet"
              key={i}
              onClick={() => {
                this.props.history.push(`/snippets/${snippet._id}`);
                this.setState({ input: "" });
              }}
            >
              {snippet.title}
            </li>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div id="nav-container" className="up">
        <div className="nav-content">
          <div className="nav-create-snippet-form-container">
            <div className="x-icon-container">
              <XIcon />
            </div>

            <h2>
              Create a new snippet.
              <span className="countdown">{8 - this.state.snipTime}</span>
            </h2>

            <div className="create-message">
              <p>{this.writeMessage()}</p>
            </div>

            <SnippetDisplayContainer
              displayType="create"
              snippet={this.state.currentNotes}
            />

            {this.keyboardOrForm()}
          </div>

          <div className="nav-base-bar-container">
            <div className="nav-base-bar-content">
              <div className="nav-base-bar-left">
                <Logo />
              </div>

              <div className="nav-base-bar-right">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="search"
                    id="search"
                    value={this.state.input}
                    onChange={(e) => this.handleChange("input", e)}
                  />
                  <button id="search-btn" onClick={() => this.handleSearch()}>
                    <SearchIcon />
                  </button>
                </div>
                {this.searchAutocomplete()}

                <div className="icon-wrap">
                  <UserIcon
                    onClick={() =>
                      this.props.history.push(
                        `/profile/${this.props.currentUserId}`
                      )
                    }
                  />
                  <NavbarUserDropdown
                    history={this.props.history}
                    loggedIn={this.props.loggedIn}
                    logoutUser={this.logoutUser}
                    openModal={this.props.openModal}
                    currentUserId={this.props.currentUserId}
                  />
                </div>
              </div>
            </div>

            <div className="nav-base-tab-container">
              <DownChevronIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
