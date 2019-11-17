import React, {useState} from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import Header from '../header';
import Footer from '../footer';



function Register(props) {
    const {cartProducts, plusProduct, minusProduct, validateForm, handleSubmit, formError} = props;
    // const [formError, setFormError] = useState(null);

//   function handleSubmit(event){
//     event.preventDefault();
//     console.log('printing register form data', event.target.password.value);
//     if(event.target.password.value != event.target.confirmpassword.value){
//         setFormError("password and confirm password didnt match");
//      return;   
//     }

//   }

//   function validateForm(e){
//          let password =  e.target.value;
//          // minimum 6 character
//          // must have number and alphabet
//          //cannot have space
       
//          if(password.length < 6){
//              setFormError("must have 6 characters");
//              return;
//          }

//          if(!/\d/.test(password)){
//             setFormError("must have number");
//             return;
//         }

//          setFormError("");

//     }

  return <div className="container"><Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}/>

<section className="section-form">
            
            <div className="row">
            <span>{formError}</span>
                <form method="post" className="contact-form" onSubmit={(e)=>handleSubmit(e)}>

                    <div className="row">
                            <div className="col span-1-of-2">
                                <h1>Signup</h1> 
                                <p>We do not share your personal details with anyone.</p>
                            </div>
                            <div className="col span-1-of-2">
                                    <div className="row form-input">
                                        <div>
                                        <label htmlFor="email">First Name</label> 
                                        </div>
                                        <input type="text" className="email-input" name="firstname"  size="50"placeholder="First Name" required/>
                                    </div>
                                    
                                    <div className="row form-input">
                                        <input type="text" name="lastname" size="50" placeholder="Last Name" required/>
                                    </div>

                                    <div className="row form-input">
                                        <input type="email" name="email" size="50" placeholder="Email" required/>
                                    </div>

                                    <div className="row form-input">
                                        <input type="password" name="password" size="50" onChange={(e)=>validateForm(e)} placeholder="Password" required/>
                                    </div>

                                    <div className="row form-input">
                                        <input type="password" name="confirmpassword" onChange={(e)=>validateForm(e)} size="50" placeholder="Confirm Password" required/>
                                    </div>

                                    <div className="row form-input">
                                        <button type="submit" className="btn-login">Signup</button>
                                    </div>
                            </div>
                    </div>

                </form>
                
            </div>

        </section>


<Footer/>
   </div>;
}

export default Register;