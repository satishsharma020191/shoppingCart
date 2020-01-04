import React, { useEffect } from "react";
import "../../style/common/style.scss";
import "../../style/common/ionicons.scss";
import Header from '../header';
import Footer from '../footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Layout(props) {
    const { cartProducts, toastError, setErrorToast } = props;

    useEffect(() => {
        if (toastError) {
            toast(toastError, { type: toast.TYPE.ERROR, autoClose: 3000 });
            setErrorToast('');
        }
    }, [toastError]);

    return (<>
        <a className="skip-main" href="#main">Skip to main content</a>
        <ToastContainer />
        <Header cartProducts={cartProducts} />
        {props.children}
        <Footer /></>);
}

export default Layout;