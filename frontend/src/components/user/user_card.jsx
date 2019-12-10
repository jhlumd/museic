import React from 'react';
import { withRouter } from "react-router-dom";


function UserCard(props) {
  const name = props.name,
        id = props.id,
        profileImageUrlAddress = props.icon;
  
  return (
    <li 
      className='user-card-container'
      onClick={() => props.history.push(`/profile/${id}`)}
      key={id}
    >
      <div className='user-card-content'>
        <img className="profile-picture hvr-grow" src={profileImageUrlAddress}/>

        <h3 className='username'>
          { name }
        </h3>
      </div>
      
    </li>
  )
}

export default withRouter(UserCard);