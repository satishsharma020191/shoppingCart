import React from 'react';

const CartOffer = (props) => {
    return (<>
        {props.cartProducts && props.cartProducts.length ?
            <div className="lowest-price-gauranteed">
                <div className="lowest-price-logo">
                    <img src={`/static/images/lowest-price.png`} alt="lowest-price" />
                </div>
                <div className="cheaper-anywhere"><p>You won't find it cheaper anywhwere</p></div>
            </div> : <div id="dialogDesc" className="lowest-price-gauranteed-blank">
                <h2>No items in your cart</h2>
                <p>Your favourite items are just a click away</p>
            </div>}
    </>)
}

export default CartOffer;