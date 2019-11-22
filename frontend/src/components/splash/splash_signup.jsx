import React from 'react'
import DownChevronIcon from '../resources/down_chevron_icon'; 

export default function SplashSignup(props) {
  return (
    <div id='splash-signup-container'>
      <h2>Join the <span>MUSEIC</span> community.</h2>
      <p className='subtitle'>Create an account to save your new snippet.</p>
      <button className='signup-btn hvr-grow' onClick={() => props.history.push('/signup')}>
        <div>SIGN UP</div> 
      </button>
      <p className='signin-link'>
        Already have an account? <span onClick={() => props.history.push('/signin')}>Sign In.</span>  
      </p>

      <div className='next'>
        <div className='down-chevron' onClick={() => props.snapTo('splash-team-info-container')}>
          <DownChevronIcon />
        </div>
        <p>
          Meet the team.
          </p>
      </div>
    </div>
  )
}
