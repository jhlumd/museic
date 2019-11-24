import React from 'react';
import { withRouter } from 'react-router-dom';

import NavbarUserDropdown from './navbar_user_dropdown';

import Logo from '../resources/logo';
import UserIcon from '../resources/user_icon';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id='nav-no-session-container'>
        <div className='nav-base-bar-content'>

          <div className='nav-base-bar-left'>
            <Logo />
          </div>

          <div className='nav-base-bar-right'>

            <div className='icon-wrap'>
              <UserIcon />
              <NavbarUserDropdown
                loggedIn={this.props.loggedIn}
                logoutUser={this.logoutUser}
                openModal={this.props.openModal}
              />
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);