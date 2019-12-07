import React from "react";
import "./model.scss";
import Cart from "../../containers/cart";

function Model(props) {
  const { show, handleClose } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={`modal-main ${showHideClassName}`}>
    <Cart handleClose={handleClose} />
  </div>;
}

export default Model;