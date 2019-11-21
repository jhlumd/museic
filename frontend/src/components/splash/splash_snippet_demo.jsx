import React, { Component } from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';  
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';

export default class SplashSnippetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSnippet: this.props.snippets[0],
      activeTab: 2
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabNum) {
    this.setState({ activeSnippet: this.props.snippets[tabNum] })
    this.setState({ activeTab: tabNum + 1 })
  }

  componentDidMount() {
    this.setState({ activeTab: 1 })
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
    return (
      <div id='splash-snippet-demo-container'>
        <h2>
          Check these out.
        </h2>

        <ul className='tabs-container'>
          {
            this.props.snippets.map((snippet, i) => (
              <li key={i} onClick={() => this.changeTab(i)}>
                {/* { snippet.name.toLowerCase() } */}
                { snippet }
              </li>
            ))
          }
        </ul>

        <div className='snippet-display-container'>
          <SnippetDisplayContainer snippet={this.state.activeSnippet} />
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