import React from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import "../../style/common/ionicons.scss";
import Header from '../header';
import Footer from '../footer';

function Layout(props) {
    const { cartProducts, plusProduct, minusProduct } = props;
    return (<>
        <a class="skip-main" href="#main">Skip to main content</a>
        <Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />
        {props.children}
        <Footer /></>);
}

export default Layout;