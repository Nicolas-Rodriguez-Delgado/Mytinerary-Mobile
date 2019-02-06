import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { slide as Menu } from 'react-burger-menu';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Grid} from '@material-ui/core/Grid';
import LoginMenu from './Layout/Login';


class Landing extends React.Component {
    render (){
        return (
            <div className="Landing">
            <MainToolBar />
            <Logo />

            <p className="slogan">Find your perfect trip, designed by insiders who know and love their cities</p>

            <img src='/images/circled-right-2.png' className="arrow"/>

            <PicCarousel />
            </div>
        );
    }
}

class Avatar extends React.Component {
    render(){
        return(
            <div className="avatar">
                <img src='/images/whiskers-sam.jpg' alt="Avatar" className="avatarPic" />
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
                <LoginMenu />
            </div>
        )
    }
}

class PicCarousel extends React.Component {
    render() {
        return (
            <Carousel interval="3000" autoPlay="true" showThumbs={false} infiniteLoop="true" showStatus={false} >
               
               
            <div>
                    <img className="city" src="/images/cities/amsterdambig.jpg" />
                    <p className="legend">Amsterdam</p>

                    </div>
                    <div>
                    <img className="city" src="/images/cities/londonbig.jpg" />
                    <p className="legend">London</p>
                    </div>
                    <div>
                    
                    <img className="city" src="/images/cities/Rome.jpg" />
                    <p className="legend">Rome</p>
                    </div>
                    <div>
                    <img className="city" src="/images/cities/Split.jpg" />
                    <p className="legend">Split</p>

                     </div>
                

                <div>
                <img className="city" src="/images/cities/Miami.jpg" />
                    <p className="legend">Miami</p>
                </div>

                <div>
                <img className="city" src="/images/cities/ParisBig.jpg" />
                    <p className="legend">Paris</p>
                
                </div>
                <div>
                <img className="city" src="/images/cities/Lisboa.jpg" />
                    <p className="legend">Lisboa</p>
                
                </div>
                <div>
                <img className="city" src="/images/cities/Barcelonabig.jpg" />
                    <p className="legend">Barcelona</p>
                
                </div>
                <div>
                <img className="city" src="/images/cities/Athens.jpg" />
                    <p className="legend">Athens</p>
                
                </div>
                <div>
                <img className="city" src="/images/cities/new_york_1.jpg" />
                    <p className="legend">New York</p>
                
                </div>
                
            </Carousel>
        );
    }
};

ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
