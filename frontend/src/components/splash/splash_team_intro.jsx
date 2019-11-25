import React from 'react'
import GithubIcon from '../resources/github_icon';

export default function SplashTeamInfo() {
  return (
    <div id='splash-team-info-container'>
      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Phil_Zheng.jpg')} alt="Photo of Phil Zheng"/>
          <GithubIcon />
        </div>  

        <div className='team-member-description'>
          <h3>Phil Zheng</h3>
          <p>
            Hey. I made the entire backend.
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
          <GithubIcon />
        </div>  

      </div>

      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Jaehyuk_Lee.jpg')} alt="Photo of Jaehyuk Lee" />
          <GithubIcon />
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
