import React from "react";
import "../style/model.scss";
import Cart from "../components/cart";

function Model(props) {
    const {show,handleClose,children} = props;

    const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={showHideClassName}>
  <section className="modal-main">
  <Cart handleClose={props.handleClose}/>
    <button onClick={handleClose}>sat</button>
  </section>
</div>;
}

export default Model;