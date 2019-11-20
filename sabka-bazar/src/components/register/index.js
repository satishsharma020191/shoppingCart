import React, { useState } from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import "../../style/form.scss";
import Header from '../header';
import Footer from '../footer';



function Register(props) {
    const { cartProducts, plusProduct, minusProduct, validateForm, handleSubmit, formError } = props;

    return <div className="container"><Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />

        <section className="section-form">

            <div className="row">
                <span>{formError}</span>
                <form method="post" className="contact-form" onSubmit={(e) => handleSubmit(e)}>

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
                                <input type="text" className="email-input" name="firstname" size="50" placeholder="First Name" required aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <input type="text" name="lastname" size="50" placeholder="Last Name" required aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <input type="email" name="email" size="50" placeholder="Email" required aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <input type="password" name="password" size="50" onChange={(e) => validateForm(e)} placeholder="Password" required aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <input type="password" name="confirmpassword" onChange={(e) => validateForm(e)} size="50" placeholder="Confirm Password" required aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <button type="submit" className="btn-login">Signup</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

        </section>


        <Footer />
    </div>;
}

export default Register;