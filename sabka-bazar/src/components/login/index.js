import React, { useState } from "react";
import Layout from '../layout';
import "../../style/common/form.scss";
import { validator } from '../../utils';


function Login(props) {
    const { cartProducts } = props;

    const [formError, setFormError] = useState({});

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.history.push('/');
    }

    function validateForm(e, type) {
        let val = e.target.value;
        let resp = validator.validateForm(val, type);
        setFormError(resp);
    }


    return <Layout cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}>
        <section className="section-form" id="main">
            <div className="row">
                <form method="post" onSubmit={(e) => handleSubmit(e)}>

                    <div className="row">
                        <div className="col span-1-of-2 form-heading">
                            <h1>Login</h1>
                            <p>Get access to your orders wish list and recommendations </p>
                        </div>
                        <div className="col span-1-of-2 form-data">
                            <div className="row form-input">
                                <div>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <input type="email" className="email-input" name="email" size="50" onChange={(e) => validateForm(e, 'email')} placeholder="Email" required
                                    aria-required="true" aria-describedby="email-error" />
                                <p id="email-error">{formError.error && formError.type === 'email' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <input type="password" name="password" size="50" onChange={(e) => validateForm(e, 'password')} placeholder="Password" required
                                    aria-required="true" aria-describedby="password-error" />
                                <p id="password-error">{formError.error && formError.type === 'password' ? formError.message : ''}</p>
                            </div>

                            <div className="row form-input">
                                <button type="submit" className="btn-login">Login</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

        </section>
    </Layout>;
}

export default Login;