import React from "react";
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
 


function Home(props) {  
    let widthStyle = {
        width: '100%'
    };


  return <div className="container"><Header/>

<section>


  <div className="row home-tile clearfix">
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={30} totalSlides={3} >
        <Slider>
          <Slide index={0}><img src={offer1}/></Slide>
          <Slide index={1}><img src={offer2}/></Slide>
          <Slide index={2}><img src={offer3}/></Slide>
        </Slider>
      
      <Dot slide={0}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">1</span>
      </Dot>
      <Dot slide={1}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">2</span>
      </Dot>
      <Dot slide={2}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">3</span>
      </Dot>
      
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
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

export default Home;