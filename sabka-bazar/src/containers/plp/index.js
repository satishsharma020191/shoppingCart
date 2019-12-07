import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestProductsData, requestaddToCart, requestAddProduct, requestMinusProduct } from "./actions";

const mapStateToProps = (state) => ({
    products: state.plp.products,
    categories: state.home.categories,
    cartProducts: state.plp.cartProducts
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestProductsData, requestaddToCart, requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Plp);