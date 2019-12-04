import React from 'react'

export default function NavbarUserDropdown(props) {
  if (props.loggedIn) {
    return (
      <div className='nav-dropdown-container'>

        <button onClick={() => props.history.push('/snippets/index')}>
          <div>Snippets</div>
        </button>

        <button onClick={() => props.history.push('/profile')}>
          <div>Profile</div>
        </button>

        <button onClick={props.logoutUser}>
          <div>Logout</div>
        </button>

      </div>
    );
  } else {
    return (
      <div className='nav-dropdown-container'>

        <div className='nav-dropdown-top-pad'></div>

        <button onClick={() => props.openModal('signup')}>
          <div>Signup</div>
        </button>

        <button onClick={() => props.openModal('login')}>
          <div>Login</div>
        </button>

      </div>
    );
  }
}
