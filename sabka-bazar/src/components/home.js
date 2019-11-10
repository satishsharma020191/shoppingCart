import React, { useEffect, useState } from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/home.scss";
import Header from './header';
import Footer from './footer';

import offer1 from "../static/images/offers/offer1.jpg";
import offer2 from "../static/images/offers/offer1.jpg";
import offer3 from "../static/images/offers/offer1.jpg";
import offer4 from "../static/images/offers/offer1.jpg";
import offer5 from "../static/images/offers/offer1.jpg";
import fruit1 from "../static/images/category/fruits.png";
import bakeryImg from "../static/images/category/bakery.png";

import { CarouselProvider, Slider, Dot, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions";
 


function Home(props) {  
    let widthStyle = {
        width: '100%'
    };

    console.log('printing home props', props.data);

    useEffect(()=>{
      props.requestApiData();
    },[])


  return <div className="container"><Header/>

<section>
  <div className="row home-tile clearfix">
  
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={30} totalSlides={3} >
    <div className="slide-container">
    <div className="slideshow-container">
        <Slider>
          <Slide index={0} className="mySlides"><img src={offer1}/></Slide>
          <Slide index={1} className="mySlides"><img src={offer2}/></Slide>
          <Slide index={2} className="mySlides"><img src={offer3}/></Slide>
        </Slider>
      
      <div class="slides-dot">
        <Dot slide={0} className="dot"/>
        <Dot slide={1} className="dot"/>
        <Dot slide={2} className="dot"/>
      </div>
      
      <ButtonBack className="prev">Back</ButtonBack>
      <ButtonNext className="next">Next</ButtonNext>
      </div>
      </div>
    </CarouselProvider>
</div>
</section>


<section>
<div className="row home-tile clearfix">
    <div className="col span-1-of-2">
        <figure className="left-image">
            <img src={fruit1} alt="fruit basket" />
        </figure>
        </div>
        <div className="col span-1-of-2 title-text clearfix">
            <h2>Fruits & Vegetables</h2>
            <p>A variety of fresh fruits and Vegetables</p>
            <a href="#" className="btn-tile">Explore fruit-and-veg</a>
            </div>
</div>

<div className="row home-tile ">
       
            <div className="col span-1-of-2 title-text clearfix">
                <h2>Bakery Cakes and Dairy</h2>
                <p>The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>
                <a href="#" className="btn-tile">Explore fruit-and-veg</a>
                </div>

                <div className="col span-1-of-2">
                        <figure className="left-image">
                            <img src={bakeryImg} alt="fruit basket" />
                        </figure>
                        </div>
    </div>


</section>

<Footer/>
 </div>;
}

const mapStateToProps = state => ({data: state.data});

const mapDispatchToProps = dispatch => bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);