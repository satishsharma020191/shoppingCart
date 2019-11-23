import React, { useState } from "react";
import Login from '../../components/login';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";
import { validator } from '../../utils';

function LoginContainer(props) {
  const { cartProducts } = props;
  const [formError, setFormError] = useState({});

  function plusProduct(product) {
    props.requestAddProduct(product);
  }

  function minusProduct(product) {
    props.requestMinusProduct(product);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push('/');
  }

  function validateForm(e, type) {
    let val = e.target.value;
    let resp = validator.validateForm(val, type);
    setFormError(resp);
  }


  return <Login cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} handleSubmit={handleSubmit} formError={formError} validateForm={validateForm} />;
}

const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });

const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);