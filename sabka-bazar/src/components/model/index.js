import React from "react";
import "./model.scss";

function Model(props) {
  const { show } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={`modal-main ${showHideClassName}`}>
    {props.children}
  </div>;
}

export default Model;