import React from 'react';
const Footer = (props) => {
    const { cartProducts, totalCheckoutPrice, handleClose } = props;
    return (
        <>
            {
                cartProducts && cartProducts.length ?
                    (<div className="footer-checkout-bottom">
                        <div className="footer-bottom">
                            <p>Promo code can be applied on payment page</p>
                        </div>
                        <button className="footer-checkout" onClick={props.handleClose}>
                            <span className="checkout-text">Proceed to Checkout</span>
                            <div className="checkout-price">
                                <span>Rs. {totalCheckoutPrice} </span>
                                <i className="ion-ios-arrow-forward icon-forward"></i>
                            </div>
                        </button></div>) : (<div className="footer-checkout-bottom">

                            <button className="footer-checkout" onClick={handleClose}>Start Shopping</button>
                        </div>)
            }
        </>);
}

export default Footer;