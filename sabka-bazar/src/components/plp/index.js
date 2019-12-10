import React, { useState, useEffect } from "react";
import Layout from '../layout';
import "./plp.scss";
import { Link } from 'react-router-dom';
import { chunk } from 'lodash';

function Plp(props) {
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

    useEffect(() => {
        props.requestProductsData({ cid: cid, categories: categories });
    }, [cid]);

    function buyNow(product) {
        props.requestaddToCart(product);

    }

    let rows = [];

    return <Layout cartProducts={cartProducts}>
        <section className="section-plp" id="main">
            <div className="row">
                <div className="col span-2-of-10 sidebar">
                    <nav className="topnavside">
                        <a onClick={showMenu}><span className="selectedFilter">{cid.replace(/-/g, ' ').toUpperCase()}</span><i className="ion-ios-arrow-down iconDown"></i></a>
                        <ul className="myLinks" style={{ display: displayProp }}>
                            <li className={cid === 'fruit-and-veg' ? 'active' : ''}><Link to={'/plp/fruit-and-veg'}>Fruits & Vegitables</Link></li>
                            <li className={cid === 'bakery-cakes-dairy' ? 'active' : ''}><Link to={'/plp/bakery-cakes-dairy'}>Backery Cakes and Dairy</Link></li>
                            <li className={cid === 'beverages' ? 'active' : ''}><Link to={'/plp/beverages'}>Beverages</Link></li>
                            <li className={cid === 'beauty-hygiene' ? 'active' : ''}><Link to={'/plp/beauty-hygiene'}>Beauty and Hygiene</Link></li>
                            <li className={cid === 'baby' ? 'active' : ''}><Link to={'/plp/baby'}>Baby Care</Link></li>
                        </ul></nav>
                </div>


                <div className="col span-8-of-10 products">
                    <section className="section-products">
                        {products && products.map((obj, i) => {
                            rows.push(<div key={obj.id} className="col span-1-of-4 item">
                                <h3>{obj.name}</h3>
                                <div className="item-content">
                                    <div className="item-inner-content">
                                        <img src={obj.imageURL} alt={obj.name} />
                                    </div>
                                    <div className="item-inner-content">
                                        <p>{obj.description}</p>
                                        <div className="price-tag">
                                            MRP Rs. {obj.price} <button onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                            return null;
                        })}

                        {(chunk(rows, 4).map(function (group, i) {
                            return <div key={i} className="row">{group}</div>
                        }))}

                    </section>
                </div>



            </div>
        </section>

    </Layout>;
}

export default Plp;