import React, { useState } from "react";
import Register from '../../components/register';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";
import { validator } from '../../utils';

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
        if (event.target.password.value !== event.target.confirmPassword.value) {
            setFormError({ type: 'confirmPassword', error: true, message: 'password and confirm password didnt match' });
            return;
        }
        props.history.push('/');
    }

    function validateForm(e, type) {
        let val = e.target.value;
        let resp = validator.validateForm(val, type);
        setFormError(resp);
    }


    return <Register cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} handleSubmit={handleSubmit} validateForm={validateForm} formError={formError} />;
}


const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });
const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);