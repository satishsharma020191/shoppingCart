import React, { useEffect, useState } from "react";
import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestProductsData, requestaddToCart, requestAddProduct, requestMinusProduct } from "./actions";

function PlpContainer(props) {
    const { products, categories, cartProducts } = props;
    const [displayProp, setDisplayProp] = useState('');
    let cid = props.match.params.cid;

    function showMenu() {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
    }

    console.log('printing home cat', categories);

    useEffect(() => {
        props.requestProductsData({ cid: cid, categories: categories });
    }, [cid]);

    function buyNow(product) {
        props.requestaddToCart(product);

    }

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }

    return <Plp products={products} cid={cid} cartProducts={cartProducts} buyNow={buyNow} plusProduct={plusProduct} minusProduct={minusProduct} showMenu={showMenu} displayProp={displayProp} />;
}

const mapStateToProps = (state) => ({
    products: state.plp.products,
    categories: state.home.categories,
    cartProducts: state.plp.cartProducts
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestProductsData, requestaddToCart, requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlpContainer);