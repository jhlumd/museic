import React from 'react'

export default function SplashSignup(props) {
  return (
    <div id='splash-signup-container'>
      <h2>Join the Museic community.</h2>
      <p>Make an account to save your snippet.</p>
      <button className='signup-btn' onClick={() => props.history.push('/signup')}>
        SIGN UP
      </button>
      <p className='signin-link'>
        Already have an account? <span onClick={() => props.history.push('/signin')}>Sign In.</span>  
      </p>
    </div>
  )
}
