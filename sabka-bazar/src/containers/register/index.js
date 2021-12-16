import Register from '../../components/register';
import { connect } from "react-redux";
const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });

export default connect(mapStateToProps, {})(Register);