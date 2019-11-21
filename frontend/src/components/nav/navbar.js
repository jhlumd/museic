import React from 'react';
import NavbarUserDropdown from './navbar_user_dropdown';
import Logo from '../resources/logo';
import UserIcon from '../resources/user_icon';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }



  render() {
    return (
      <div>
        <div className='nav-left'>
          <Logo />
        </div>
        <div className='nav-right'>
          <UserIcon />
          <NavbarUserDropdown loggedIn={this.props.loggedIn} />
        </div>
      </div>
    );
  }
}

export default Navbar;