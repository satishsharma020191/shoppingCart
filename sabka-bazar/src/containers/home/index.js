import Home from '../../components/home';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestBannerData, requestCategoriesData } from "./actions";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";

const mapStateToProps = state => ({
    banners: state.home.banners,
    categories: state.home.categories,
    cartProducts: state.plp.cartProducts
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestBannerData, requestCategoriesData, requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);