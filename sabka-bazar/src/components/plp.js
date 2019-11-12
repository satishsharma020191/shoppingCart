import React, {useEffect} from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/plp.scss";
import Header from './header';
import Footer from './footer';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {chunk} from 'lodash';
import { requestProductsData, filterProductsData } from "../actions";

function Plp(props) {
    const { products, categories } = props;
    let cid = props.match.params.cid;
    let rows = [];
console.log('printing products', products);

useEffect(()=>{
    props.requestProductsData({cid:cid, categories:categories});
},[]);

  return <div className="container"><Header/>

<section className="section-plp">
        <div className="row">
            <div className="col span-2-of-10 sidebar">
                <ul>
                    <li>Fruits & Vegitables</li>
                    <li>Backery Cakes and Dairy</li>
                    <li>Beverages</li>
                    <li>Beauty and Hygiene</li>
                    <li>Baby Care</li>
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