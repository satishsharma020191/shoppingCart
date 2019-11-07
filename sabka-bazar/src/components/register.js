import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import Logo from "../static/images/logo.png";




function Register(props) {
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
                                <h1>Signup</h1> 
                                <p>We do not share your personal details with anyone.</p>
                            </div>
                            <div class="col span-1-of-2">
                                    <div class="row form-input">
                                        <div>
                                        <label for="email">First Name</label> 
                                        </div>
                                        <input type="text" class="email-input" name="firstname"  size="50"placeholder="First Name" required/>
                                    </div>
                                    
                                    <div class="row form-input">
                                        <input type="text" name="lastname" size="50" placeholder="Last Name" required/>
                                    </div>

                                    <div class="row form-input">
                                        <input type="text" name="email" size="50" placeholder="Email" required/>
                                    </div>

                                    <div class="row form-input">
                                        <input type="text" name="password" size="50" placeholder="Password" required/>
                                    </div>

                                    <div class="row form-input">
                                        <input type="text" name="confirmpassword" size="50" placeholder="Confirm Password" required/>
                                    </div>

                                    <div class="row form-input">
                                        <a href="#" class="btn-login">Signup</a>
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

export default Register;