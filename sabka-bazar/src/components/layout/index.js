import React from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import Header from '../header';
import Footer from '../footer';

function Layout(props) {
    const { cartProducts, plusProduct, minusProduct } = props;
    return (<>
        <Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />
        {props.children}
        <Footer /></>);
}

export default Layout;