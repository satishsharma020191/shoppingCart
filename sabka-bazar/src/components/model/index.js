import React from "react";
import "../../style/model.scss";
import Cart from "../cart";

function Model(props) {
  const { show, handleClose, cartProducts, plusProduct, minusProduct } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={showHideClassName}>
    <section className="modal-main">
      <Cart handleClose={handleClose} cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />
    </section>
  </div>;
}

export default Model;