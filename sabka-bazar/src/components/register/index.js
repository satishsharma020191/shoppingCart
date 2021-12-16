import React, { useState } from "react";
import "../../style/common/form.scss";
import Layout from '../../containers/layout';
import { validator } from '../../utils';
import Button from '../button';



function Register(props) {
    const [formError, setFormError] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.password.value !== event.target.confirmPassword.value) {
            setFormError({ type: 'mismatchPassword', error: true, message: 'password and confirm password didnt match' });
            return;
        }
        props.history.push('/');
    }

    function validateForm(e, type) {
        let val = e.target.value;
        let resp = validator.validateForm(val, type);
        setFormError(resp);
    }


    return <Layout>

        <section className="section-form" id="main">

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
                                <input type="text" name="firstName" size="50" onChange={(e) => validateForm(e, 'firstName')} placeholder="First Name" required aria-required="true" aria-describedby="firstName-error" />
                                <p id="firstName-error">{formError.error && formError.type === 'firstName' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="text" name="lastName" size="50" onChange={(e) => validateForm(e, 'lastName')} placeholder="Last Name" required aria-required="true" aria-describedby="lastName-error" />
                                <p id="lastName-error">{formError.error && formError.type === 'lastName' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="email" name="email" size="50" onChange={(e) => validateForm(e, 'email')} placeholder="Email" required aria-required="true" aria-describedby="email-error" />
                                <p id="email-error">{formError.error && formError.type === 'email' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="password" name="password" size="50" onChange={(e) => validateForm(e, 'password')} placeholder="Password" required aria-required="true" aria-describedby="error-password" />
                                <p id="error-password">{formError.error && formError.type === 'password' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="password" name="confirmPassword" size="50" onChange={(e) => validateForm(e, 'confirmPassword')} placeholder="Confirm Password" required aria-required="true" aria-describedby="error-confirmPassword" />
                                <p id="error-confirmPassword">{formError.error && formError.type === 'confirmPassword' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <Button type="submit" className="btn-login" ariaDescribedby="error-mismatchPassword">Signup</Button>
                                <p id="error-mismatchPassword">{formError.error && formError.type === 'mismatchPassword' ? formError.message : ''}</p>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

        </section>
    </Layout>;
}

export default Register;