import React from 'react';
import { withRouter } from "react-router-dom";


function UserCard(props) {
  let name = props.name,
      id = props.id,
      profileImageUrlAddress = props.icon;

  profileImageUrlAddress = profileImageUrlAddress ? profileImageUrlAddress : 'https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg';

  return (
    <li 
      className='user-card-container'
      onClick={() => props.history.push(`/profile/${id}`)}
      key={id}
    >
      <div className='user-card-content'>

        <div className="image-container" >
          <img className="profile-picture hvr-grow" src={profileImageUrlAddress}/>
        </div>


        <p className='username'>
          { name }
        </p>
      </div>
      
    </li>
  )
}

export default withRouter(UserCard);