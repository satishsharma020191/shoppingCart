import React, { useEffect } from "react";
import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestProductsData, requestaddToCart } from "./actions";
 
function PlpContainer(props) {  
    const { products, categories, cartProducts } = props;
    let cid = props.match.params.cid;

    console.log('printing home cat',categories);
    
    useEffect(()=>{
    props.requestProductsData({cid:cid, categories:categories});
    },[cid]);

    function buyNow(product){
        props.requestaddToCart(product);

    }

  return <Plp products={products} cid={cid} cartProducts={cartProducts} buyNow={buyNow}/>;
}

const mapStateToProps = (state) => ({products: state.plp.products,
                                     categories: state.home.categories,
                                     cartProducts: state.plp.cartProducts
                                    });
const mapDispatchToProps = (dispatch)=> bindActionCreators({requestProductsData, requestaddToCart},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlpContainer);