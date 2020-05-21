import React, { Component } from 'react';
import './header-style.scss';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className='header-wrapper'>
        <div className='wrapper'>
          <h1>Valei lunch</h1>
          <nav>
            <ul>
              <li>
                <a href='#'>Topplistan</a>
              </li>
              <li>
                <a href=''>Luncher</a>{' '}
              </li>
              <li>
                <a href=''>Vart åt du idag?</a>{' '}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
