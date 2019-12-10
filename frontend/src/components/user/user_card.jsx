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
        <img lassName="profile-picture hvr-grow" src={profileImageUrlAddress}/>

        <h3 className='username'>
          { name }
        </h3>
      </div>
      
    </li>
  )
}

export default withRouter(UserCard);