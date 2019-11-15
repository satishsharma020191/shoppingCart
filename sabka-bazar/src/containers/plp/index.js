import React, { useEffect } from "react";
import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestProductsData } from "./actions";
 


function PlpContainer(props) {  

    const { products, categories } = props;
    let cid = props.match.params.cid;
    console.log('printing prod cat cid', products, categories, cid);

    useEffect(()=>{
    props.requestProductsData({cid:cid, categories:categories});
},[cid]);


  return <Plp products={products} categories={categories} cid={cid} />;
}

const mapStateToProps = (state) => ({products: state.plp.products,
    categories: state.home.categories});
const mapDispatchToProps = (dispatch)=> bindActionCreators({requestProductsData},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlpContainer);