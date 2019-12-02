import React, { useEffect } from "react";
import Home from '../../components/home';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestBannerData, requestCategoriesData } from "./actions";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";


function HomeContainer(props) {

    const { banners, categories, cartProducts } = props;

    useEffect(() => {
        props.requestBannerData();
        props.requestCategoriesData();
    }, []);

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }


    return <Home banners={banners} categories={categories} cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />;
}

const mapStateToProps = state => ({
    banners: state.home.banners,
    categories: state.home.categories,
    cartProducts: state.plp.cartProducts
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestBannerData, requestCategoriesData, requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);