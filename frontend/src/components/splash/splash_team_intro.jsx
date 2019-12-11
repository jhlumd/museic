import React from 'react'
import GithubIcon from '../resources/github_icon';
import LinkedinIcon from '../resources/linkedin_icon';

export default function SplashTeamInfo() {
  return (
    <div id='splash-team-info-container'>
      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Phil_Zheng.jpg')} alt="Photo of Phil Zheng"/>
          <div className='icon-links'>
            <a 
              href=''
              className='github'
              target="_blank"
            >
              <GithubIcon />
            </a>
            <a 
              href=''
              className='linkedin'
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>  

        <div className='team-member-description'>
          <h3>Phil Zheng</h3>
          <p>
            Hey. I constructed the backend and added things like search, image uploading and comments.
          </p>
        </div>

      </div>

      <div className='team-member-container'>

        <div className='team-member-description'>
          <h3>Jiani Fan</h3>
          <p>
            Hi. I worked on building, and styling the frontend.
          </p>
        </div>

        <div className='team-member-photo'>
          <img src={require('../resources/Jiani_Fan.jpg')} alt="Photo of Jiani Fan" />
          <div className='icon-links'>
            <a
              href='https://github.com/blueberry-hamster'
              className='github'
              target="_blank"
            >
              <GithubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/jiani-fan-38b11096/'
              className='linkedin'
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>  

      </div>

      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Jaehyuk_Lee.jpg')} alt="Photo of Jaehyuk Lee" />
          <div className='icon-links'>
            <a
              href=''
              className='github'
              target="_blank"
            >
              <GithubIcon />
            </a>
            <a
              href=''
              className='linkedin'
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>  

        <div className='team-member-description'>
          <h3>Jaehyuk Lee</h3>
          <p>
            Hello. I made the unique musical component.
          </p>
        </div>

      </div>
    </div>
  )
}
