import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../model";

function Header(props) {
    const {cartProducts} = props;
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
       <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo"/></Link>
   </figure>
   </div>
   <div className="col span-1-of-3 xyz navigate">
      <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/plp/all'}>Products</Link></li>
      </ul>
   </div>
   <div className="col span-1-of-3 xyz navigate2">
       <div className="row">
           <ul>
               <li><Link to={'/login'}>Sign in</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
           </ul>
      </div>
      <div className="row">
          <a href="#" className="btn btn-cart" onClick={showModal}><img src={'/static/images/cart.svg'}/>{cartProducts ? cartProducts.length: 0} items</a>
      </div>

   </div>
  </div>
</header>
<Modal show={show} handleClose={hideModal} cartProducts={cartProducts}/>
</div>
}

export default Header;