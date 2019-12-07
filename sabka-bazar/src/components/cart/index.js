import React from "react";
import "./cart.scss";
import { groupBy } from 'lodash';

function Cart(props) {
    let groupedProducts = [];
    const { cartProducts, plusProduct, minusProduct } = props;
    let totalCheckoutPrice = 0;

    if (cartProducts) {
        groupedProducts = groupBy(cartProducts, 'id');
    }

    return <div className="shopping-cart" tabindex="0" role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
        <div className="shopping-cart-contents">
            <div className="shopping-cart-header">
                <h2 id="dialogTitle">My Cart({cartProducts ? cartProducts.length : 0} item)</h2>
                <button className="ion-ios-close-empty icon-close" aria-label="cart close" onClick={props.handleClose}></button>
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
                                <button className="icon-minus" aria-label={`remove ${obj[0].name}`} onClick={() => minusProduct(obj[0])}><i className="ion-ios-minus-outline icon-minus"></i></button>
                                <span className="minus-1">{obj.length}</span>
                                <button className="icon-plus" aria-label={`add ${obj[0].name}`} onClick={() => plusProduct(obj[0])}><i className="ion-ios-plus-outline icon-plus"></i></button>
                                <span className="icon-close"><i className="ion-ios-close-empty icon-close"></i></span>
                                <span className="product-price">Rs.{obj[0].price}</span>
                                <span className="total-product-price">Rs.{obj[0].price * obj.length}</span>
                            </div>
                        )
                    })}
                </div>

                {cartProducts && cartProducts.length ?
                    <div className="lowest-price-gauranteed">
                        <div className="lowest-price-logo">
                            <img src={`/static/images/lowest-price.png`} alt="lowest-price" />
                        </div>
                        <div className="cheaper-anywhere"><p>You won't find it cheaper anywhwere</p></div>
                    </div> : <div id="dialogDesc" className="lowest-price-gauranteed-blank">
                        <h2>No items in your cart</h2>
                        <p>Your favourite items are just a click away</p>
                    </div>}


            </div>



            {cartProducts && cartProducts.length ?
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

                        <button className="footer-checkout" onClick={props.handleClose}>Start Shopping</button>
                    </div>)}
        </div>
    </div >;
}

export default Cart;