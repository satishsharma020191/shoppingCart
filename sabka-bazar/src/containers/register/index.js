import React, { useState } from "react";
import Register from '../../components/register';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";
import {validator} from '../../utils'; 


function RegisterContainer(props) {
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
        console.log('printing register form data', event.target.password.value);
        if (event.target.password.value != event.target.confirmpassword.value) {
            setFormError("password and confirm password didnt match");
            return;
        }

        
    }

    function validateForm(e, type){
        let resp = validator.validateForm(e, type);
        setFormError(resp);
    }
   

    return <Register cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} handleSubmit={handleSubmit} validateForm={validateForm} formError={formError} />;
}


const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });
const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);