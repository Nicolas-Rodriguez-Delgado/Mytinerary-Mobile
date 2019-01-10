import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { slide as Menu } from 'react-burger-menu'



class Landing extends React.Component {
    render (){
        return (
            <div className="Landing">
            <MainToolBar />
            <Logo />

            <p>Find your perfect trip, designed by insiders who know and love their cities</p>

            </div>
        );
    }
}

class Avatar extends React.Component {
    render(){
        return(
            <div className="avatar">
                <img src='/images/whiskers-sam.jpg' className="avatarPic" />
            </div>
        )
    }
}

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

class Logo extends React.Component {
    render(){
        return(
            <div className="Logo">
                <img src='/images/MYtineraryLogo.png' alt="logo" className="logoPic"/>
            </div>
        )
    }
}

ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
