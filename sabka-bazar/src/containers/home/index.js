import React, { useEffect, useState } from "react";
import Home from '../../components/home';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestBannerData, requestCategoriesData } from "../../actions";
 


function HomeContainer(props) {  

    console.log('printing home props', props);
    const {banners, categories} = props;
    console.log('printing banners', banners);
    console.log('printing categories', categories);

    useEffect(()=>{
      props.requestBannerData();
      props.requestCategoriesData();
    },[])


  return <Home/>;
}

const mapStateToProps = state => ({banners: state.data.banners,
                                   categories : state.data.categories});

const mapDispatchToProps = dispatch => bindActionCreators({requestBannerData, requestCategoriesData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);