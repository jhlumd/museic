import React from 'react'
import DownChevronIcon from '../resources/down_chevron_icon';

export default function SplashIntro(props) {
  return (
    <div id='splash-intro-container'>

      <div className='museic-logo'>
        <h1>Museic</h1>
      </div>

      <div className='splash-description'>
        <h3>
          Welcome to Museic!
        </h3>
        <p>
          Make and share melodic snippets on our platform. Jot down your inspirations easily with our easy-to-use interface.
        </p>
      </div>

      <div className='next'>
        <p>
          Look what you could make!
        </p>
        <div className='down-chevron' onClick={() => props.snapTo('splash-snippet-demo-container')}>
          <DownChevronIcon />
        </div>
      </div>

    </div>
  )
}
