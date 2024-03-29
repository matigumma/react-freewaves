import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.scss';
//https://github.com/leandrowd/react-responsive-carousel
class HomeSlider extends Component {
    state = {  }
    render() { 
        return ( 

                <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} emulateTouch infiniteLoop >
                    <div>
                        <img src="http://freewaves.live/wp-content/uploads/slide1.jpg" alt="slider-1"/>
                        <div className="wrapContSlider">
                            <div className="constSlider">
                                TU SPOT
                                FAVORITO ESTA
                                ONLINE
                            </div>
                        </div>
                    </div>
                    <div>
                    <img src="http://freewaves.live/wp-content/uploads/slide2.jpg" alt="slider-2"/>
                    </div>
                    <div>
                    <img src="http://freewaves.live/wp-content/uploads/slide3.jpg" alt="slider-3"/>
                    </div>
                </Carousel>

        );
    }
}
 
export default HomeSlider;