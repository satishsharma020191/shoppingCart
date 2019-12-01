import React from "react";
import "../../style/home.scss";
import Layout from '../layout';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Dot, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Home(props) {
    const { banners, categories, cartProducts, plusProduct, minusProduct } = props;

    return <Layout cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}>
        <section>
            <div className="row home-tile clearfix">

                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={30} isPlaying={true} totalSlides={banners && banners.length} >
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
            </div>
        </section>


        <section>

            {categories && categories.map((obj, i) => {
                return [
                    i % 2 === 0 ?
                        <div key={obj.id} className="row home-tile clearfix">
                            <div className="col span-1-of-2">
                                <figure className="left-image">
                                    <img src={obj.imageUrl} alt="fruit basket" />
                                </figure>
                            </div>
                            <div className="col span-1-of-2 title-text">
                                <h2>{obj.name}</h2>
                                <p>{obj.description}</p>
                                <Link to={`/plp/${obj.key}`} className="btn-tile">Explore {obj.key}</Link>
                            </div>
                        </div>
                        : <div key={obj.id} className="row home-tile">

                            <div className="col span-1-of-2 title-text">
                                <h2>{obj.name}</h2>
                                <p>{obj.description}</p>
                                <Link to={`/plp/${obj.key}`} className="btn-tile">Explore {obj.key}</Link>
                            </div>

                            <div className="col span-1-of-2">
                                <figure className="left-image">
                                    <img src={obj.imageUrl} alt="fruit basket" />
                                </figure>
                            </div>
                        </div>
                ]
            })

            }

        </section>

    </Layout>;
}

export default Home;