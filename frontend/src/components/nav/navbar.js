import React from 'react';
import NavbarUserDropdown from './navbar_user_dropdown';
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';
import KeyboardContainer from '../keyboard/keyboard_container';

import Logo from '../resources/logo';
import DownChevronIcon from '../resources/down_chevron_icon';
import UserIcon from '../resources/user_icon';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSnippet: [],
      message: 'Try clicking the tiles, or pressing some keys to make some music.'
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.updateSnippet = this.updateSnippet.bind(this);
  }

  componentDidUpdate() {
    const message0 = 'Try clicking the tiles, or pressing some keys to make some music.'
    const message1 = 'There you go! Keep going.';
    const message2 = 'Hey that sounds pretty nice.';
    const message3 = 'Nice! Let\'s save.';
    const snipLen = this.state.currentSnippet.length;

    let message;

    if (snipLen === 0) {
      message = message0;
    } else if (snipLen < 3) {
      message = message1;
    } else if (snipLen < 8) {
      message = message2;
    } else {
      message = message3;
    }

    this.setState({ message })
  }

  updateSnippet(newSnippet) {
    this.setState({ currentSnippet: newSnippet })
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div id='nav-container'>

        <div className='nav-content'>
          
          <div className='nav-create-snippet-form-container'>

            <h2>
              Create a new snippet.
            </h2>
            <SnippetDisplayContainer snippet={this.state.currentSnippet} />
            <KeyboardContainer updateSnippet={this.updateSnippet} />
            
          </div>
          
          <div className='nav-base-bar-container'>

            <div className='nav-base-bar-content'>

              <div className='nav-base-bar-left'>
                <Logo />
              </div>

              <div className='nav-base-bar-right'>
                <UserIcon />
                <NavbarUserDropdown 
                  history={this.props.history}
                  loggedIn={this.props.loggedIn} 
                  logoutUser={this.logoutUser}
                />
              </div>

            </div>

            <div className='nav-base-tab-container'>
              <DownChevronIcon />
            </div>
          </div>

          
        </div>

      </div>
    );
  }
}

export default Navbar;