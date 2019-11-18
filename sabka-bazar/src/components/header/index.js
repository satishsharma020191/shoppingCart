import React, { useState } from "react";
import "../../style/common/ionicons.scss";
import { Link } from "react-router-dom";
import Modal from "../model";

function Header(props) {
    const {cartProducts, plusProduct, minusProduct} = props;
    const [show, setModel] = useState(false);
    const [displayProp, setDisplayProp] = useState('none');
    
    let showModal = () => {
        setModel(true);
      };
    
    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
      };

      function myFunction(){
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
      }

  return <div>
    <header>
  <div class="topnav">
  <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo"/></Link>
  <div id="myLinks" style={{display:displayProp}}>
    <Link to={'/'}>Home</Link>
    <Link to={'/plp/all'}>Products</Link>
    <Link to={'/login'}>Sign In</Link>
    <Link to={'/register'}>Register</Link>
  </div>
  <div className="navigate">
  <ul className="top-right">
    <li><a href="#" onClick={showModal}><img src={'/static/images/cart.svg'}/><span>{cartProducts ? cartProducts.length: 0} items</span></a></li>
    <li><a href="#" class="icon" onClick={()=>myFunction()}>
    <i className="ion-ios-arrow-down"></i>
  </a></li>
  </ul>
  </div>
  {/* <a href="#" className="btn-mobile-cart icon" onClick={showModal}><img src={'/static/images/cart.svg'}/><span>{cartProducts ? cartProducts.length: 0} items</span></a>
  <a href="#" class="icon" onClick={()=>myFunction()}>
    <i className="ion-ios-arrow-down"></i>
  </a> */}
</div>

  <div className="row webHeader">
   <div className="col span-1-of-3">
   <figure className="sabka-bazar-logo">
       <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo"/></Link>
   </figure>
   </div>
   <div className="col span-1-of-3 navigate">
      <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/plp/all'}>Products</Link></li>
      </ul>
   </div>
   <div className="col span-1-of-3 navigate">
       <div className="row">
           <ul>
               <li><Link to={'/login'}>Sign in</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
           </ul>
      </div>
      <div className="row">
         <center><a href="#" className="btn-cart" onClick={showModal}><img src={'/static/images/cart.svg'}/><span>{cartProducts ? cartProducts.length: 0} items</span></a></center> 
      </div>

   </div>
  </div>
</header>
      
<Modal show={show} handleClose={hideModal} cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}/>
</div>
}

export default Header;