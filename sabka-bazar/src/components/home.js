import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/home.scss";
import Logo from "../static/images/logo.png";

import offer1 from "../static/images/offers/offer1.jpg";
import offer2 from "../static/images/offers/offer1.jpg";
import offer3 from "../static/images/offers/offer1.jpg";
import offer4 from "../static/images/offers/offer1.jpg";
import offer5 from "../static/images/offers/offer1.jpg";
import fruit1 from "../static/images/category/fruits.png";
import bakeryImg from "../static/images/category/bakery.png";




function Home(props) {  
    let widthStyle = {
        width: '100%'
    };

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
        showSlides(slideIndex = n);
}

  
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log('printing slides', slides,n);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   // slides[slideIndex-1].style.display = "block";  
   // dots[slideIndex-1].className += " active";
}


  return <div className="container"><header>
  <div className="row">
   <div className="col span-1-of-3 xyz">
   <figure className="sabka-bazar-logo">
       <img src={Logo} alt="logo"/>
   </figure>
   </div>
   <div className="col span-1-of-3 xyz navigate">
      <ul>
          <li>Home</li>
          <li>Products</li>
      </ul>
   </div>
   <div className="col span-1-of-3 xyz navigate2">
       <div className="row">
           <ul>
               <li>Sign in</li>
               <li>Register</li>
           </ul>
      </div>
      <div className="row">
          
          <a href="#" className="btn btn-cart"><i className="ion-ios-cart-outline icon-big"></i> 0 items</a>
      </div>

   </div>
  </div>
</header>

<section>
    <div className="slide-container">
    {/* Slideshow container */}
<div className="slideshow-container">


    {/* Full-width images with number and caption text */}
    <div className="mySlides fade">
      <div className="numbertext">1 / 5</div>
      <img src={offer1} style={widthStyle} />
      <div className="text">Caption Text</div>
    </div>
  
    <div className="mySlides fade">
      <div className="numbertext">2 / 5</div>
      <img src={offer2} style={widthStyle} />
      <div className="text">Caption Two</div>
    </div>
  
    <div className="mySlides fade">
      <div className="numbertext">3 / 5</div>
      <img src={offer3} style={widthStyle} />
      <div className="text">Caption Three</div>
    </div>
    <div className="mySlides fade">
        <div className="numbertext">4 / 5</div>
        <img src={offer4} style={widthStyle} />
        <div className="text">Caption Four</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">5 / 5</div>
        <img src={offer5} style={widthStyle} />
        <div className="text">Caption Five</div>
      </div>
  
    {/* Next and previous buttons */}
    <a className="prev" onClick={(e)=>plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={(e)=>plusSlides(1)}>&#10095;</a>
  </div>
  <br/>
  
  {/* The dots/circles */}
  <div className="slides-dot">
    <span className="dot" onClick={(e)=>currentSlide(1)}></span>
    <span className="dot" onClick={(e)=>currentSlide(2)}></span>
    <span className="dot" onClick={(e)=>currentSlide(3)}></span>
    <span className="dot" onClick={(e)=>currentSlide(4)}></span>
    <span className="dot" onClick={(e)=>currentSlide(5)}></span>
  </div>
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

<footer>
   <p>
       Copyright &copy; 2011-2018 sabka bazaar Grocery Supplies Pvt. Ltd
   </p>
</footer></div>;
}

export default Home;