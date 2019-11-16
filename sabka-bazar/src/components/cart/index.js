import React from "react";
import "../../style/cart.scss";
import {groupBy} from 'lodash';

function Cart(props) {
    let groupedProducts =[];
    const {cartProducts, plusProduct, minusProduct} = props;
    let totalCheckoutPrice = 0;

    if(cartProducts){
    groupedProducts = groupBy(cartProducts,'id');  
    }

  return  <div className="container">
  <div className="shopping-cart">
      <div className="shopping-cart-contents">
      <div className="shopping-cart-header">
       <p>My Cart({cartProducts?cartProducts.length:0} item)</p>
       <i className="ion-ios-close-empty icon-close" onClick={props.handleClose}></i>
      </div>

                {groupedProducts && Object.values(groupedProducts).map((obj)=>{
                    totalCheckoutPrice += obj[0].price * obj.length;
                return (
                    <div className="shopping-cart-items">
                    <figure className="apple-logo">
                        <img src={obj[0].imageURL} alt={obj[0].name}/>
                    </figure>
                        <p>{obj[0].name}</p>
                        <span className="icon-minus" onClick={()=> minusProduct(obj[0])}>-</span>
                        <span className="minus-1">{obj.length}</span>
                        <span className="icon-plus" onClick={()=> plusProduct(obj[0])}>+</span>
                        <span className="icon-close"><i className="ion-ios-close-empty icon-close"></i></span>
                        <span className="product-price">{obj[0].price}</span>   
                        <span className="total-product-price">{obj[0].price * obj.length}</span>
                    </div>
            )})}
        
      <div className="lowest-price-gauranteed">
          <figure className="lowest-price-logo">
          <img src={`/static/images/lowest-price.png`} alt="lowest-price" />
          </figure>
          <span className="cheaper-anywhere">You won't find it cheaper anywhwere</span>
      </div>
      <div className="footer-checkout-bottom">
      <div className="footer-bottom">
          <p>Promo code can be applied on payment page</p>
      </div>
          <div className="footer-checkout" onClick={props.handleClose}>
          <span className="checkout-text">Proceed to Checkout</span>
            <div className="checkout-text-1">
          <span className="checkout-price">Rs. {totalCheckoutPrice} </span>
          <i className="ion-ios-arrow-forward icon-forward"></i>
            </div>
          </div>
      </div>
      </div>
  </div>
</div>;
}

export default Cart;