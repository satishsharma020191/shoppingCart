import Home from '../../components/home';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestBannerData, requestCategoriesData } from "./actions";

const mapStateToProps = state => ({
    banners: state.home.banners,
    categories: state.home.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestBannerData, requestCategoriesData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);