import React from 'react'

export default function NavbarUserDropdown(props) {
  if (props.loggedIn) {
    return (
      <div className='nav-dropdown-container'>

        <button onClick={() => this.history.push('/profile')}>
          <div>Profile</div>
        </button>

        <button onClick={this.props.logoutUser}>
          <div>Logout</div>
        </button>

      </div>
    );
  } else {
    return (
      <div className='nav-dropdown-container'>

        <div className='nav-dropdown-top-pad'></div>

        <button onClick={() => this.history.push('/signup')}>
          <div>Signup</div>
        </button>

        <button onClick={() => this.history.push('/login')}>
          <div>Login</div>
        </button>

      </div>
    );
  }
}
