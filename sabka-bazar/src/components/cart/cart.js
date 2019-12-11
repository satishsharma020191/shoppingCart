import React from "react";
import "./cart.scss";
import groupBy from 'lodash.groupby';
import Lineitem from './lineItem';
import Footer from './footer';
import CartOffer from './cartOffer';
import Button from '../button';

function Cart(props) {
    let groupedProducts = [];
    const { cartProducts } = props;

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }

    let totalCheckoutPrice = 0;

    if (cartProducts) {
        groupedProducts = groupBy(cartProducts, 'id');
    }

    return <div className="shopping-cart" tabindex="0" role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
        <div className="shopping-cart-contents">
            <div className="shopping-cart-header">
                <h2 id="dialogTitle">My Cart({cartProducts ? cartProducts.length : 0} item)</h2>
                <Button className={`ion-ios-close-empty icon-close`} ariaLabel={`cart close`} onClick={props.handleClose}></Button>
            </div>
            <div className="cart-body">
                <div className="cart-items">
                    {groupedProducts && Object.values(groupedProducts).map((obj, i) => {
                        totalCheckoutPrice += obj[0].price * obj.length;
                        return (
                            <Lineitem i={i} obj={obj} plusProduct={plusProduct} minusProduct={minusProduct} />
                        )
                    })}
                </div>


                <CartOffer cartProducts={cartProducts} />


            </div>

            <Footer cartProducts={cartProducts} totalCheckoutPrice={totalCheckoutPrice} handleClose={props.handleClose} />
        </div>
    </div >;
}

export default Cart;