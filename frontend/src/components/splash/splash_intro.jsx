import React from 'react';
import DownChevronIcon from '../resources/down_chevron_icon';

export default class SplashIntro extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // add animation to bar under logo
    const bar = document.getElementsByClassName('museic-logo-bar')[0];
    window.setTimeout(() => (
      bar.classList.add("rainbow")
    ),
    1000)
    // add animation to each char of logo
    for (let i = 1; i <= 'museic'.length; i++) {
      const element = document.querySelector(`.museic-logo div:nth-child(${i})`);
      window.setTimeout(() => (
        element.classList.add("slide-bottom")
        ),
        115 * i);

      //  remove slide-bottom after it's done
      window.setTimeout(() => (
        element.classList.remove("slide-bottom"),
        document.querySelector('.museic-logo h1').classList.add("revert")
      ),
        1000);
      
      element.classList.add("hvr-float");
    }
    
  }
    
  render() {
    return (
      <div id='splash-intro-container'>
        <div className='splash-intro-main'>

          <div className='museic-logo'>
            <h1>
              <div>M</div>
              <div>U</div>
              <div>S</div>
              <div>E</div>
              <div>I</div>
              <div>C</div>
            </h1>
            <div className='museic-logo-bar scale-up-hor-left'></div>
          </div>

          <div className='splash-description'>
            <h3>
              Welcome to MUSEIC!
            </h3>
            <p>
              Make and share melodic snippets on our platform. Jot down your inspirations easily with our easy-to-use interface.
          </p>
          </div>

        </div>

        <div className='next'>
          <div className='down-chevron' onClick={() => this.props.snapTo('splash-snippet-demo-container')}>
            <DownChevronIcon />
          </div>
          <p>
            Take a look.
          </p>
        </div>

      </div>
    )
  }
}

