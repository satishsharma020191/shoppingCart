import React from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import Header from '../header';
import Footer from '../footer';



function Login(props) {
    const { cartProducts, plusProduct, minusProduct, handleSubmit } = props;

    return <div className="container">
        <Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />
        <section className="section-form">
            <div className="row">
                <form method="post" onSubmit={(e) => handleSubmit(e)}>

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
                                <input type="email" className="email-input" name="email" size="50" placeholder="Email" required
                                    aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <input type="password" name="password" size="50" placeholder="Password" required
                                    aria-required="true" />
                            </div>

                            <div className="row form-input">
                                <button type="submit" className="btn-login">Login</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

        </section>

        <Footer />

    </div>;
}

export default Login;