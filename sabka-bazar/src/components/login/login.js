import React from "react";
import "../../style/common/grid.scss";
import "../../style/login.scss";
//import logo from "../../static/images/logo.png";
import Logo from "../../static/images/logo.png";




function Login(props) {
  return <div class="container"><header>
  <div class="row">
   <div class="col span-1-of-3 xyz">
   <figure class="sabka-bazar-logo">
       <img src={Logo} alt="logo"/>
   </figure>
   </div>
   <div class="col span-1-of-3 xyz navigate">
      <ul>
          <li>Home</li>
          <li>Products</li>
      </ul>
   </div>
   <div class="col span-1-of-3 xyz navigate2">
       <div class="row">
           <ul>
               <li>Sign in</li>
               <li>Register</li>
           </ul>
      </div>
      <div class="row">
          
          <a href="#" class="btn btn-cart"><i class="ion-ios-cart-outline icon-big"></i> 0 items</a>
      </div>

   </div>
  </div>
</header>

<section class="section-form">
   
   <div class="row">
       <form method="post" action="#" class="contact-form">

           <div class="row">
                   <div class="col span-1-of-2">
                       <h1>Login</h1> 
                       <p>Get access to your orders wish list and recommendations </p>
                   </div>
                   <div class="col span-1-of-2">
                           <div class="row form-input">
                               <div>
                               <label for="email">Email</label> 
                               </div>
                               <input type="text" class="email-input" name="email" size="50" placeholder="Email" required/>
                           </div>
                           
                           <div class="row form-input">
                               <input type="text" name="password" size="50" placeholder="Password" required />
                           </div>

                           <div class="row form-input">
                               <a href="#" class="btn-login">Login</a>
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