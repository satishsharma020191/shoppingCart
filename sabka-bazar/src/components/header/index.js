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
  <div className="row">
  <div className="col span-7-of-10">
  <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo"/></Link>
  <div id="myLinks" style={{display:displayProp}}>
    <Link to={'/'}>Home</Link>
    <Link to={'/plp/all'}>Products</Link>
    <Link to={'/login'}>Sign In</Link>
    <Link to={'/register'}>Register</Link>
  </div>
  </div>
  
  <div className="col span-3-of-10">
    <div className="col span-2-of-3" style={{display:'inline'}}>
        <i onClick={showModal}> <img src={'/static/images/cart.svg'}/><span>{cartProducts ? cartProducts.length: 0} items</span> </i>
    </div>
    <div className="col span-1-of-3">
    <i onClick={()=>myFunction()} className="ion-ios-arrow-down"></i>
    </div>
    
  </div>
  </div></div>
 


  <div className="row webHeader">
  <div className="col span-1-of-12"></div>
   <div className="col span-2-of-12 sabka-bazar-logo">
       <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo"/></Link>
   </div>
   <div className="col span-6-of-12 navigate navigation-main">
      <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/plp/all'}>Products</Link></li>
      </ul>
   </div>
   <div className="col span-2-of-12 navigate">
       <div className="row">
           <ul>
               <li><Link to={'/login'}>Sign in</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
           </ul>
      </div>
      <div className="row">
        <a href="#" className="btn-cart" onClick={showModal}><img src={'/static/images/cart.svg'}/><span>{cartProducts ? cartProducts.length: 0} items</span></a> 
      </div>

   </div>
   <div className="col span-1-of-12"></div>
  </div>
</header>
      
<Modal show={show} handleClose={hideModal} cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}/>
</div>
}

export default Header;