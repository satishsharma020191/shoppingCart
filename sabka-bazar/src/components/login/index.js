import React from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import Header from '../header';
import Footer from '../footer';



function Login(props) {
    const {cartProducts, plusProduct, minusProduct} = props;
  return <div className="container">
      <Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}/>
<section className="section-form">
   
   <div className="row">
       <form method="post" action="#" className="contact-form">

           <div className="row">
                   <div className="col span-1-of-2">
                       <h1>Login</h1> 
                       <p>Get access to your orders wish list and recommendations </p>
                   </div>
                   <div className="col span-1-of-2">
                           <div className="row form-input">
                               <div>
                               <label htmlFor="email">Email</label> 
                               </div>
                               <input type="text" className="email-input" name="email" size="50" placeholder="Email" required/>
                           </div>
                           
                           <div className="row form-input">
                               <input type="text" name="password" size="50" placeholder="Password" required />
                           </div>

                           <div className="row form-input">
                               <a href="#" className="btn-login">Login</a>
                           </div>
                   </div>
           </div>

       </form>
       
   </div>

</section>

<Footer/>

</div>;
}

export default Login;