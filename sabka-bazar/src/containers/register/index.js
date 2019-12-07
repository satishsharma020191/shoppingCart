import Register from '../../components/register';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAddProduct, requestMinusProduct } from "../plp/actions";

const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });
const mapDispatchToProps = dispatch => bindActionCreators({ requestAddProduct, requestMinusProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);