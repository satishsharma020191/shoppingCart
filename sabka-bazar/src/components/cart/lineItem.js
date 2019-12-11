import React from "react";
import Button from '../button';
const LineItem = (props) => {
    const { obj, i, plusProduct, minusProduct } = props;
    return <div key={i} className="shopping-cart-item">
        <div className="apple-logo">
            <img src={obj[0].imageURL} alt={obj[0].name} />
        </div>
        <p><strong>{obj[0].name}</strong></p>
        <Button className={`icon-minus`} ariaLabel={`remove ${obj[0].name}`} onClick={() => minusProduct(obj[0])}><i className="ion-ios-minus-outline icon-minus"></i></Button>
        <span className="minus-1">{obj.length}</span>
        <Button className={`icon-plus`} ariaLabel={`add ${obj[0].name}`} onClick={() => plusProduct(obj[0])}><i className="ion-ios-plus-outline icon-plus"></i></Button>
        <span className="icon-close"><i className="ion-ios-close-empty icon-close"></i></span>
        <span className="product-price">Rs.{obj[0].price}</span>
        <span className="total-product-price">Rs.{obj[0].price * obj.length}</span>
    </div>
}

export default LineItem;