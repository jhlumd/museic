import React from 'react'
import Logo from '../resources/logo';
import GithubIcon from '../resources/github_icon';

export default function Footer() {
  return (
    <div id='footer-container'>
      <div className='footer-left-container'>
        <Logo />
        <div className='footer-left-info'>
          <p>2019</p>
          <p>Made in SF</p>
        </div>
      </div>

      <div className='footer-right-container'>
        <GithubIcon />
      </div>
    </div>
  )
}
