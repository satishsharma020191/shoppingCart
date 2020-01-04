import Layout from '../../components/layout';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setErrorToast } from '../home/actions';

const mapStateToProps = state => ({
    cartProducts: state.plp.cartProducts,
    toastError: state.home.toastMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({ setErrorToast }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);