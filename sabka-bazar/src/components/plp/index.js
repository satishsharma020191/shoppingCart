import React, {useEffect, useState} from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/plp.scss";
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {chunk} from 'lodash';
import { requestProductsData, filterProductsData } from "../../actions";

function Plp(props) {
    const { products, categories } = props;
    let cid = props.match.params.cid;
    let rows = [];
    console.log('printing products', products);

useEffect(()=>{
    props.requestProductsData({cid:cid, categories:categories});
},[cid]);

  return <div className="container"><Header/>

<section className="section-plp">
        <div className="row">
            <div className="col span-2-of-10 sidebar">
                <ul>
                    <li className={cid=='fruit-and-veg'?'active':''}><Link to={'/plp/fruit-and-veg'}>Fruits & Vegitables</Link></li>
                    <li className={cid=='bakery-cakes-dairy'?'active':''}><Link to={'/plp/bakery-cakes-dairy'}>Backery Cakes and Dairy</Link></li>
                    <li className={cid=='beverages'?'active':''}><Link to={'/plp/beverages'}>Beverages</Link></li>
                    <li className={cid=='beauty-hygiene'?'active':''}><Link to={'/plp/beauty-hygiene'}>Beauty and Hygiene</Link></li>
                    <li className={cid=='baby'?'active':''}><Link to={'/plp/baby'}>Baby Care</Link></li>
                </ul>
            </div>


            <div className="col span-8-of-10 products">
                <section className="section-products">
                { products && products.map((obj, i)=>{
                        rows.push(<div className="col span-1-of-4 item">
                        <h3>{obj.name}</h3>
                        <img src={obj.imageURL}/>
                        <p>{obj.description}</p>
                        <div className="price-tag">
                        MRP Rs. {obj.price} <a href="#">Buy Now</a>
                        </div>
                    </div>);
                })}

                {(chunk(rows, 4).map(function(group) { 
                    return <div className="row">{group}</div>
                }))}    
                    
                </section>
            </div>


            
        </div>
    </section>

<Footer/>
</div>;
}

const mapStateToProps = (state) => ({products: state.data.products,
                                     categories: state.data.categories});
const mapDispathToProps = (dispatch)=> bindActionCreators({requestProductsData, filterProductsData},dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Plp);