import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoginMenu from './Layout/Login';
import PicCarousel from './Layout/Carousel'
import MainToolBar from './Layout/ToolBar'


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


ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
