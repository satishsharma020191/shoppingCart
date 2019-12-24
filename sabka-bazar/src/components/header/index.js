import React, { useState } from "react";
//import "../../style/common/ionicons.scss";
import { Link } from "react-router-dom";
import Modal from "../model";
import Button from "../button";
import Cart from "../../containers/cart";

function Header(props) {
    const { cartProducts } = props;
    const [show, setModel] = useState(false);
    const [displayProp, setDisplayProp] = useState('none');

    let showModal = () => {
        setModel(true);
    };

    let hideModal = () => {
        setModel(false);
    };

    function showMenu() {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
    }

    return <div>
        <header>
            <div className="topnav">
                <div className="row">
                    <div className="col sm-7-of-10">
                        <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo" /></Link>
                        <ul className="myLinks" style={{ display: displayProp }}>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/plp/all'}>Products</Link></li>
                            <li><Link to={'/login'}>Sign In</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </ul>
                    </div>

                    <div className="col sm-3-of-10">
                        <div className="col sm-2-of-3">
                            <i onClick={showModal} className="btn-cart">  <img src={'/static/images/cart.svg'} alt="cart logo" /><span>({cartProducts ? cartProducts.length : 0})</span></i>
                        </div>
                        <div className="col sm-1-of-3 btn-cart">
                            <i onClick={() => showMenu()} className="ion-ios-arrow-down"></i>
                        </div>

                    </div>
                </div></div>



            <div className="row webHeader">
                <div className="col span-1-of-12"></div>
                <div className="col-header span-2-of-12 sabka-bazar-logo">
                    <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo" /></Link>
                </div>
                <nav aria-label="header" className="col-header span-6-of-12 navigate navigation-main">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/plp/all'}>Products</Link></li>
                    </ul>
                </nav>
                <div className="col-header span-3-of-12 navigate">
                    <nav aria-label="login" className="row">
                        <ul>
                            <li><Link to={'/login'}>Sign in</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </ul>
                    </nav>
                    <div className="row">
                        <Button className="btn-cart" ariaLabel={`${cartProducts ? cartProducts.length : 0} item cart`} onClick={showModal}><img src={'/static/images/cart.svg'} alt='cart icon' /><span>{cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length > 1 ? 'items' : 'item'}</span></Button>
                    </div>

                </div>
        
            </div>
        </header>

        <Modal show={show}>
            <Cart handleClose={hideModal} />
        </Modal>
    </div>
}

export default Header;