import React from "react";
import "../../style/model.scss";
import Cart from "../cart";

function Model(props) {
    const {show,handleClose,children} = props;

    const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={showHideClassName}>
  <section className="modal-main">
  <Cart handleClose={handleClose}/>
  </section>
</div>;
}

export default Model;