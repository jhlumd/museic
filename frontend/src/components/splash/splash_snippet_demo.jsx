import React, { Component } from "react";
import DownChevronIcon from "../resources/down_chevron_icon";
import SnippetDisplayContainer from "../snippet_display/snippet_display_container";

import { demoSnippets } from "./demo_snips";

export default class SplashSnippetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSnippet: demoSnippets[0],
      activeTab: 0,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabNum) {
    this.props.pausePlayback();

    this.setState({ activeSnippet: demoSnippets[tabNum] }, () => {
      this.setState({ activeTab: tabNum }, () => {
        document.querySelector("li.active").classList.remove("active");
        document
          .querySelector(`li.tab:nth-child(${tabNum + 1})`)
          .classList.add("active");
      });
    });
  }

  componentDidMount() {
    this.setState({ activeTab: 0 });
    document.querySelector("li.tab:nth-child(1)").classList.add("active");
  }

  render() {
    const demoSnippetsArr = [
      { title: "Demo 1" },
      { title: "Demo 2" },
      { title: "Demo 3" },
    ];

    return (
      <div id="splash-snippet-demo-container">
        <h2>Check these out.</h2>

        <ul className="tabs-container">
          {demoSnippetsArr.map((snippet, i) => (
            <li className="tab" key={i} onClick={() => this.changeTab(i)}>
              {snippet.title}
            </li>
          ))}
        </ul>

        <div className="snippet-display-container">
          <SnippetDisplayContainer
            displayType="play"
            snippet={this.state.activeSnippet.notes}
          />
        </div>

        <div className="next">
          <div
            className="down-chevron"
            onClick={() => this.props.snapTo("splash-create-demo-container")}
          >
            <DownChevronIcon />
          </div>
          <p>Make your own.</p>
        </div>
      </div>
    );
  }
}
