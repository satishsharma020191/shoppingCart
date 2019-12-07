import React from "react";
import "./model.scss";
import Cart from "../cart";

function Model(props) {
  const { show, handleClose, cartProducts, plusProduct, minusProduct } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={`modal-main ${showHideClassName}`}>
    <Cart handleClose={handleClose} cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />
  </div>;
}

export default Model;