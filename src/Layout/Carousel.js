import React from 'react';
import { Carousel } from 'react-responsive-carousel';


class PicCarousel extends React.Component {
    render() {
        return (
            <Carousel interval="3000" autoPlay="true" showThumbs={false} infiniteLoop="true" showStatus={false} >
               
               
            <div>
                    <img className="city" alt="Amsterdam" src="/images/cities/amsterdambig.jpg" />
                    <p className="legend">Amsterdam</p>

                    </div>
                    <div>
                    <img className="city" alt="London" src="/images/cities/londonbig.jpg" />
                    <p className="legend">London</p>
                    </div>
                    <div>
                    
                    <img className="city" alt="Rome" src="/images/cities/Rome.jpg" />
                    <p className="legend">Rome</p>
                    </div>
                    <div>
                    <img className="city" alt="Split" src="/images/cities/Split.jpg" />
                    <p className="legend">Split</p>

                     </div>
                

                <div>
                <img className="city" alt="Miami" src="/images/cities/Miami.jpg" />
                    <p className="legend">Miami</p>
                </div>

                <div>
                <img className="city" alt="Paris" src="/images/cities/ParisBig.jpg" />
                    <p className="legend">Paris</p>
                
                </div>
                <div>
                <img className="city" alt="Lisboa" src="/images/cities/Lisboa.jpg" />
                    <p className="legend">Lisboa</p>
                
                </div>
                <div>
                <img className="city" alt="Barcelona" src="/images/cities/Barcelonabig.jpg" />
                    <p className="legend">Barcelona</p>
                
                </div>
                <div>
                <img className="city" alt="Athens" src="/images/cities/Athens.jpg" />
                    <p className="legend">Athens</p>
                
                </div>
                <div>
                <img className="city" alt="New York" src="/images/cities/new_york_1.jpg" />
                    <p className="legend">New York</p>
                
                </div>
                
            </Carousel>
        );
    }
};

export default PicCarousel;