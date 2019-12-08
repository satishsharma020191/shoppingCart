import React from "react";

const LineItem = (props) => {
    const { obj, i, plusProduct, minusProduct } = props;
    return <div key={i} className="shopping-cart-item">
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
}

export default LineItem;