import React from "react";
import Header from '../header';
import Footer from '../footer';
import "../../style/common/grid.scss";
import "../../style/common/style.scss";
import "../../style/plp.scss";

import { Link } from 'react-router-dom';
import { chunk } from 'lodash';

function Plp(props) {
    const { products, cid, cartProducts, buyNow, plusProduct, minusProduct, displayProp, showMenu } = props;
    let rows = [];

    return <div className="container"><Header cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct} />

        <section className="section-plp">
            <div className="row">
                <div className="col span-2-of-10 sidebar">
                    <div className="topnavside">
                        <Link className="iconDown" onClick={showMenu}>A</Link>
                        <ul className="myLinks" style={{ display: displayProp }}>
                            <li className={cid === 'fruit-and-veg' ? 'active' : ''}><Link to={'/plp/fruit-and-veg'}>Fruits & Vegitables</Link></li>
                            <li className={cid === 'bakery-cakes-dairy' ? 'active' : ''}><Link to={'/plp/bakery-cakes-dairy'}>Backery Cakes and Dairy</Link></li>
                            <li className={cid === 'beverages' ? 'active' : ''}><Link to={'/plp/beverages'}>Beverages</Link></li>
                            <li className={cid === 'beauty-hygiene' ? 'active' : ''}><Link to={'/plp/beauty-hygiene'}>Beauty and Hygiene</Link></li>
                            <li className={cid === 'baby' ? 'active' : ''}><Link to={'/plp/baby'}>Baby Care</Link></li>
                        </ul></div>
                </div>


                <div className="col span-8-of-10 products">
                    <section className="section-products">
                        {products && products.map((obj, i) => {
                            rows.push(<div key={obj.id} className="col span-1-of-4 item">
                                <h3>{obj.name}</h3>
                                <img src={obj.imageURL} />
                                <p>{obj.description}</p>
                                <div className="price-tag">
                                    MRP Rs. {obj.price} <a href="#" onClick={() => buyNow(obj)}>Buy Now</a>
                                </div>
                            </div>);
                        })}

                        {(chunk(rows, 4).map(function (group, i) {
                            return <div key={i} className="row">{group}</div>
                        }))}

                    </section>
                </div>



            </div>
        </section>

        <Footer />
    </div >;
}

export default Plp;