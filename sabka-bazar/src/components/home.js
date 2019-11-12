import React, { useEffect, useState } from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/home.scss";
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

import { CarouselProvider, Slider, Dot, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestBannerData, requestCategoriesData } from "../actions";
 


function Home(props) {  

    console.log('printing home props', props);
    const {banners, categories} = props;
    console.log('printing banners', banners);
    console.log('printing categories', categories);

    useEffect(()=>{
      props.requestBannerData();
      props.requestCategoriesData();
    },[])


  return <div className="container"><Header/>

<section>
  <div className="row home-tile clearfix">
  
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={30} isPlaying={true} totalSlides={banners && banners.length} >
    <div className="slide-container">
    <div className="slideshow-container">
        <Slider>
            {banners && banners.map((obj, i)=>{
                return (
          <Slide index={i} className="mySlides"><img src={obj.bannerImageUrl} alt={obj.bannerImageAlt}/></Slide>
            )})}
        </Slider>
      
      <div class="slides-dot">
        {banners && banners.map((obj, i)=>(
        <Dot slide={i} className="dot"/>
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

 { categories && categories.map((obj, i)=>{
    return [
        i%2==0 ?
    <div className="row home-tile clearfix">
        <div className="col span-1-of-2">
            <figure className="left-image">
                <img src={obj.imageUrl} alt="fruit basket" />
            </figure>
        </div>
        <div className="col span-1-of-2 title-text clearfix">
            <h2>{obj.name}</h2>
            <p>{obj.description}</p>
            <Link to={`/plp/${obj.key}`} className="btn-tile">Explore {obj.key}</Link>
        </div>
    </div>
    : <div className="row home-tile">
       
    <div className="col span-1-of-2 title-text clearfix">
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

<Footer/>
 </div>;
}

const mapStateToProps = state => ({banners: state.data.banners,
                                   categories : state.data.categories});

const mapDispatchToProps = dispatch => bindActionCreators({requestBannerData, requestCategoriesData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);