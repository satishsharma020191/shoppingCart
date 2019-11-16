import React from "react";
import "../../style/cart.scss";
import {groupBy} from 'lodash';
// import apple from "/static/images/products/fruit-n-veg/apple.jpg";
// import lowPrice from "/static/images/lowest-price.png";


function Cart(props) {
    let groupedProducts =[];
    const {cartProducts} = props;
    let totalCheckoutPrice = 0;

    if(cartProducts){
    groupedProducts = groupBy(cartProducts,'id');  
    }

    //console.log('gropued keyss:::', Object.entries(groupedProducts));
    Object.values(groupedProducts).map((obj)=>{
        console.log('printing products with count',obj.length, obj[0].imageURL);
    })

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
                        <img src={obj[0].imageURL} alt="apple"/>
                    </figure>
                        <p>{obj[0].name}</p>
                        <span><i className="ion-ios-minus-outline icon-minus"></i></span>
                        <span className="minus-1">{obj.length}</span>
                        <span className="plus-icon"><i className="ion-ios-plus-outline icon-plus"></i></span>
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