import React from "react";
import Login from '../../components/login';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";

function LoginContainer(props) {
  const { cartProducts } = props;

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('form data',data);
    console.log('printing login form data', event.target.email.value);
  }

  function plusProduct(product) {
    props.requestAddProduct(product);
  }

  function minusProduct(product) {
    props.requestMinusProduct(product);
  }
  return <Login cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} handleSubmit={handleSubmit} />;
}

const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });

const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);