import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayPlayOnlyContainer from '../snippet_display/snippet_display_play_only_container';

import { demoSnippets } from "./demo_snips";

export default class SplashSnippetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSnippet: demoSnippets[0],
      activeTab: 2
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabNum) {
    this.setState({ activeSnippet: demoSnippets[tabNum] });
    this.setState({ activeTab: tabNum + 1 });
  }

  componentDidMount() {
    this.setState({ activeTab: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevTabNum = prevState.activeTab;
    const nextTabNum = this.state.activeTab;

    if (prevTabNum !== nextTabNum) {
      const prevTab = document.querySelector(`.tabs-container li:nth-child(${prevTabNum})`);
      const nextTab = document.querySelector(`.tabs-container li:nth-child(${nextTabNum})`);

      prevTab.classList.remove('active');
      nextTab.classList.add('active');
    }
  }
  render() {
    const demoSnippetsArr = ['Demo 1', 'Demo 2', 'Demo 3']; //
    // debugger;
    return (
      <div id='splash-snippet-demo-container'>
        <h2>
          Check these out.
        </h2>

        <ul className='tabs-container'>
          {
            demoSnippetsArr.map((snippet, i) => (
              <li key={i} onClick={() => this.changeTab(i)}>
                {snippet}
              </li>
            ))
          }
        </ul>

        <div className='snippet-display-container'>
          <SnippetDisplayPlayOnlyContainer snippet={this.state.activeSnippet.notes} />
        </div>

        <div className='next'>
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-create-demo-container')}>
            <DownChevronIcon />
          </div>
          <p>
            Make your own.
          </p>
        </div>

      </div>
    )
  }
}
