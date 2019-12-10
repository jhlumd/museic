import React from 'react';
import { withRouter } from "react-router-dom";


function UserCard(props) {
  const name = props.name,
        id = props.id,
        profileImageUrlAddress = props.icon,
        history = props.history;
  
  return (
    <li 
      className='user-card-container'
      onClick={() => history.push(`/profile/${id}`)}
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