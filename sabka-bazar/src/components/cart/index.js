import React from "react";
import "../../style/cart.scss";
import { groupBy } from 'lodash';

function Cart(props) {
    let groupedProducts = [];
    const { cartProducts, plusProduct, minusProduct } = props;
    let totalCheckoutPrice = 0;

    if (cartProducts) {
        groupedProducts = groupBy(cartProducts, 'id');
    }

    return <div className="shopping-cart">

        {cartProducts ? (
            <div className="shopping-cart-contents">
                <div className="shopping-cart-header">
                    <p>My Cart({cartProducts ? cartProducts.length : 0} item)</p>
                    <i className="ion-ios-close-empty icon-close" onClick={props.handleClose}></i>
                </div>
                <div className="cart-body">
                    <div className="cart-items">
                        {groupedProducts && Object.values(groupedProducts).map((obj, i) => {
                            totalCheckoutPrice += obj[0].price * obj.length;
                            return (
                                <div key={i} className="shopping-cart-item">
                                    <div className="apple-logo">
                                        <img src={obj[0].imageURL} alt={obj[0].name} />
                                    </div>
                                    <p><strong>{obj[0].name}</strong></p>
                                    <span className="icon-minus" onClick={() => minusProduct(obj[0])}><i className="ion-ios-minus-outline icon-minus"></i></span>
                                    <span className="minus-1">{obj.length}</span>
                                    <span className="icon-plus" onClick={() => plusProduct(obj[0])}><i className="ion-ios-plus-outline icon-plus"></i></span>
                                    <span className="icon-close"><i className="ion-ios-close-empty icon-close"></i></span>
                                    <span className="product-price">Rs.{obj[0].price}</span>
                                    <span className="total-product-price">Rs.{obj[0].price * obj.length}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="lowest-price-gauranteed">
                        <div className="lowest-price-logo">
                            <img src={`/static/images/lowest-price.png`} alt="lowest-price" />
                        </div>
                        <div className="cheaper-anywhere"><p>You won't find it cheaper anywhwere</p></div>
                    </div>
                </div>

                <div className="footer-checkout-bottom">
                    <div className="footer-bottom">
                        <p>Promo code can be applied on payment page</p>
                    </div>
                    <div className="footer-checkout" onClick={props.handleClose}>
                        <span className="checkout-text">Proceed to Checkout</span>
                        <div className="checkout-price">
                            <span>Rs. {totalCheckoutPrice} </span>
                            <i className="ion-ios-arrow-forward icon-forward"></i>
                        </div>
                    </div>
                </div>

            </div>) : (
                <div className="shopping-cart-contents">
                    <div className="shopping-cart-header">
                        <p>My Cart(0 item)</p>
                        <i className="ion-ios-close-empty icon-close" onClick={props.handleClose}></i>
                    </div>


                    <div className="lowest-price-gauranteed">
                        <strong><span className="no-items-text">No items in your cart</span></strong>
                        <p>Your favourite items are just a click away</p>
                    </div>
                    <div className="footer-checkout-bottom">
                        <div className="footer-checkout" onClick={props.handleClose}>
                            <p>Start Shopping</p>
                        </div>
                    </div>
                </div>
            )}

    </div>;
}

export default Cart;