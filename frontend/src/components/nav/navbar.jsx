import React from 'react';
import { withRouter } from 'react-router-dom';

import NavbarUserDropdown from './navbar_user_dropdown';
import SnippetDisplayPlayOnlyContainer from '../snippet_display/snippet_display_play_only_container';
import KeyboardContainer from '../keyboard/keyboard_container';
import SnippetFormContainer from '../snippet_form/snippet_form_container';

import Logo from '../resources/logo';
import DownChevronIcon from '../resources/down_chevron_icon';
import UserIcon from '../resources/user_icon';
import XIcon from '../resources/x_icon';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNotes: this.props.tempNotes
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    const x = document.querySelector('.x-icon-container');
    const tab = document.querySelector('.nav-base-tab-container');
    const panel = document.getElementById('nav-container')
    tab.addEventListener('click', () => {
      panel.classList.toggle('down');
      panel.classList.toggle('up');
    }); 
    x.addEventListener('click', () => {
      panel.classList.toggle('down');
      panel.classList.toggle('up');
    }); 
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentNotes: nextProps.tempNotes
    });
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const message0 =
      "Try clicking the tiles, or pressing some keys to make some music.";
    const message1 = "There you go! Keep going.";
    const message2 = "Hey that sounds pretty nice.";
    const message3 = "Nice! Let's save that masterpiece.";
    let snipTime = 0;
    if (this.state.currentNotes && this.state.currentNotes.length > 0) {
      snipTime = this.state.currentNotes[this.state.currentNotes.length - 1]
        .startTime;
    }

    let message;
    if (snipTime === 0) {
      message = message0;
    } else if (snipTime > 0 && snipTime < 14) {
      message = message1;
    } else if (snipTime >= 14 && snipTime < 23) {
      message = message2;
    } else if (snipTime > 23) {
      message = message3;
    }

    return (
      <div id='nav-container' className='up'>

        <div className='nav-content'>
          
          <div className='nav-create-snippet-form-container'>

            <div className='x-icon-container'>
              <XIcon />
            </div>

            <h2>
              Create a new snippet.
            </h2>

            <div className='create-message'>
              <p>{message}</p>
            </div>

            <SnippetDisplayPlayOnlyContainer snippet={this.state.currentNotes} />
            <KeyboardContainer />
            <SnippetFormContainer snippet={this.state.currentNotes} />
            
          </div>
          
          <div className='nav-base-bar-container'>

            <div className='nav-base-bar-content'>

              <div className='nav-base-bar-left'>
                <Logo />
              </div>

              <div className='nav-base-bar-right'>
                <div className='icon-wrap'>
                  <UserIcon />
                  <NavbarUserDropdown 
                    history={this.props.history}
                    loggedIn={this.props.loggedIn} 
                    logoutUser={this.logoutUser}
                    openModal={this.props.openModal} 
                  />
                </div>

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

export default withRouter(Navbar);