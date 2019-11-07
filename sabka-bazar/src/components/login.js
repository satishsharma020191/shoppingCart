import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import Logo from "../static/images/logo.png";




function Login(props) {
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

<footer>
   <p>
       Copyright &copy; 2011-2018 sabka bazaar Grocery Supplies Pvt. Ltd
   </p>
</footer></div>;
}

export default Login;