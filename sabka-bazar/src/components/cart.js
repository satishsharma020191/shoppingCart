import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/common/ionicons.scss";
import "../style/cart.scss";
import apple from "../static/images/products/fruit-n-veg/apple.jpg";
import lowPrice from "../static/images/lowest-price.png";


function Cart(props) {

  return  <div class="container">
  <div class="shopping-cart">
      <div class="shopping-cart-contents">
      <div class="shopping-cart-header">
       <p>My Cart(1 item)</p>
       <span><i class="ion-ios-close-empty icon-close"></i></span>
      </div>
      <div class="shopping-cart-items">
      <figure class="apple-logo">
          <img src={apple} alt="apple"/>
      </figure>
          <p>Apple &mdash; Washington, Regular, 4 pcs</p>
          <span><i class="ion-ios-minus-outline icon-minus"></i></span>
          <span class="minus-1">1</span>
          <span class="plus-icon"><i class="ion-ios-plus-outline icon-plus"></i></span>
          <span class="icon-close"><i class="ion-ios-close-empty icon-close"></i></span>
          <span class="product-price">Rs. 187</span>   
          <span class="total-product-price">Rs. 187</span>
      </div>

      <div class="lowest-price-gauranteed">
          <figure class="lowest-price-logo">
          <img src={lowPrice} alt="lowest-price" />
          </figure>
          <span class="cheaper-anywhere">You won't find it cheaper anywhwere</span>
      </div>
      <div class="footer-checkout-bottom">
      <div class="footer-bottom">
          <p>Promo code can be applied on payment page</p>
      </div>
          <div class="footer-checkout">
          <span class="checkout-text">Proceed to Checkout</span>
            <div class="checkout-text-1">
          <span class="checkout-price">Rs. 187 </span>
          <i class="ion-ios-arrow-forward icon-forward"></i>
            </div>
          </div>
      </div>
      </div>
  </div>
</div>;
}

export default Cart;