import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Avatar from './Avatar';

class MainToolBar extends React.Component {
    showSettings (event) {
        event.preventDefault();
        
      }
  
    render () {
      return (
          <div>
        <Avatar />
        <Menu right isOpen={ false }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        </div>
      );
    }
  }

  export default MainToolBar;