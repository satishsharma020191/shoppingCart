import React from 'react';
import { CarouselProvider, Slider, Dot, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Carousel(props) {
    const { banners } = props;
    return <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={30} isPlaying={true} totalSlides={banners && banners.length} >
        <div className="slide-container">
            <div className="slideshow-container">
                <Slider>
                    {banners && banners.map((obj, i) => {
                        return (
                            <Slide key={obj.id} index={i} className="mySlides"><img src={obj.bannerImageUrl} alt={obj.bannerImageAlt} /></Slide>
                        )
                    })}
                </Slider>

                <div className="slides-dot">
                    {banners && banners.map((obj, i) => (
                        <Dot key={obj.id} slide={i} className="dot" />
                    ))}
                </div>

                <ButtonBack className="prev">Back</ButtonBack>
                <ButtonNext className="next">Next</ButtonNext>
            </div>
        </div>
    </CarouselProvider>
}

export default Carousel;