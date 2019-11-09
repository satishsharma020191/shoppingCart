import React, { useState } from "react";
import Logo from "../static/images/logo.png";
import Modal from "./model";

function Header(props) {
    const [show, setModel] = useState(false);
    let showModal = () => {
        setModel(true);
      };
    
    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
      };

  return <div><header>
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
          
          <a href="#" className="btn btn-cart" onClick={showModal}><i className="ion-ios-cart-outline icon-big"></i>items</a>
      </div>

   </div>
  </div>
</header>
<Modal show={show} handleClose={hideModal}/>
</div>
}

export default Header;