import React from "react";
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import "../../style/common/ionicons.scss";
import Header from '../header';
import Footer from '../footer';

function Layout(props) {
    const { cartProducts } = props;
    return (<>
        <a className="skip-main" href="#main">Skip to main content</a>
        <Header cartProducts={cartProducts} />
        {props.children}
        <Footer /></>);
}

export default Layout;