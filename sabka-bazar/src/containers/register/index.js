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
        let value = e.target.value;
        let validateResponse = '';
        console.log('printing value validateForm', value);
        if(type=='password' || type=='confirmPassword'){
            validateResponse = validator.passwordRules(value, type);
        }
        setFormError(validateResponse);
        console.log('password validate:::', formError);
    }
    // function validateForm(e) {
    //     let password = e.target.value;
    //     // minimum 6 character
    //     // must have number and alphabet
    //     //cannot have space

    //     if (password.length < 6) {
    //         setFormError("must have 6 characters");
    //         return;
    //     }

    //     if (!/\d/.test(password)) {
    //         setFormError("must have number");
    //         return;
    //     }

    //     setFormError("");

    // }

    return <Register cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} handleSubmit={handleSubmit} validateForm={validateForm} formError={formError} />;
}


const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });
const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);