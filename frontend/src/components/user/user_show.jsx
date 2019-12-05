import React, { Component } from 'react';
import UserShowIndex from './user_show_index';

export default class UserShow extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='user-show-container'>
        <div className='left-container'>

          <div className='user-info-container'>
            <div className='user-icon-container'>
              {/* IMG HERE */}
            </div>
            <div className='user-text-info-container'>
              <h2>{/* USERNAME HERE */}Test</h2>
              <div className='snippets user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Snippets</p>
              </div>
              <div className='likes user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Likes</p>
              </div>
              <div className='fans user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Fans</p>
              </div>
              <div className='following user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Following</p>
              </div>
            </div>
          </div>

        </div>

        <div className='right-container'>
          <h2>Your Creations</h2>
          {/* <UserShowIndex /> */}
        </div>

      </div>
    )
  }
}

