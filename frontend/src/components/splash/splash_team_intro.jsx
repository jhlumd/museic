import React from 'react'

export default function SplashTeamInfo() {
  return (
    <div id='splash-team-info-container'>
      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          {/* FIXME PUT PHOTO HERE */}
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
          {/* FIXME PUT PHOTO HERE */}
        </div>  

      </div>

      <div className='team-member-container'>
        
        <div className='team-member-photo'>
          {/* FIXME PUT PHOTO HERE */}
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