import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestProductsData, requestaddToCart } from "./actions";

const mapStateToProps = (state) => ({
    products: state.plp.products,
    categories: state.home.categories,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestProductsData, requestaddToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Plp);