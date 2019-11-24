import React from 'react'

export default function SplashTeamInfo() {
  return (
    <div id='splash-team-info-container'>
      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Phil_Zheng.jpg')} alt="Photo of Phil Zheng"/>
        </div>  

        <div className='team-member-description'>
          <h3>Phil Zheng</h3>
          <p>
            Mist enveloped the ship three hours out from port.
          </p>
        </div>

      </div>

      <div className='team-member-container'>

        <div className='team-member-description'>
          <h3>Jiani Fan</h3>
          <p>
            Mist enveloped the ship three hours out from port.
          </p>
        </div>

        <div className='team-member-photo'>
          <img src={require('../resources/Jiani_Fan.jpg')} alt="Photo of Jiani Fan" />
        </div>  

      </div>

      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          <img src={require('../resources/Jaehyuk_Lee.jpg')} alt="Photo of Jaehyuk Lee" />
        </div>  

        <div className='team-member-description'>
          <h3>Jaehyuk Lee</h3>
          <p>
            Mist enveloped the ship three hours out from port.
          </p>
        </div>

      </div>
    </div>
  )
}
