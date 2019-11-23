import React, { useState } from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import "../../style/form.scss";
import Header from '../header';
import Footer from '../footer';




function Register(props) {
    const { cartProducts, plusProduct, minusProduct, handleSubmit, validateForm, formError } = props;

    return <div className="container"><Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />

        <section className="section-form">

            <div className="row">
                <form method="post" className="contact-form" onSubmit={(e) => handleSubmit(e)}>

                    <div className="row">
                        <div className="col span-1-of-2 form-heading">
                            <h1>Signup</h1>
                            <p>We do not share your personal details with anyone.</p>
                        </div>
                        <div className="col span-1-of-2 form-data">
                            <div className="row form-input">
                                <div>
                                    <label htmlFor="email">First Name</label>
                                </div>
                                <input type="text" name="firstName" size="50" onChange={(e) => validateForm(e, 'firstName')} placeholder="First Name" required aria-required="true" />
                                <p>{formError.error && formError.type == 'firstName' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="text" name="lastName" size="50" onChange={(e) => validateForm(e, 'lastName')} placeholder="Last Name" required aria-required="true" />
                                <p>{formError.error && formError.type == 'lastName' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="email" name="email" size="50" onChange={(e) => validateForm(e, 'email')} placeholder="Email" required aria-required="true" />
                                <p>{formError.error && formError.type == 'email' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="password" name="password" size="50" onChange={(e) => validateForm(e, 'password')} placeholder="Password" required aria-required="true" />
                                <p>{formError.error && formError.type == 'password' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="password" name="confirmPassword" size="50" onChange={(e) => validateForm(e, 'confirmPassword')} placeholder="Confirm Password" required aria-required="true" />
                                <p>{formError.error && formError.type == 'confirmPassword' ? formError.message : ''}</p>
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