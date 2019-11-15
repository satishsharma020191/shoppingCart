import React, { useEffect } from "react";
import Home from '../../components/home';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestBannerData, requestCategoriesData } from "./actions";
 


function HomeContainer(props) {  

    const {banners, categories} = props;

    useEffect(()=>{
      props.requestBannerData();
      props.requestCategoriesData();
    },[])


  return <Home banners={banners} categories={categories} />;
}

const mapStateToProps = state => ({banners: state.home.banners,
                                   categories : state.home.categories});

const mapDispatchToProps = dispatch => bindActionCreators({requestBannerData, requestCategoriesData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);