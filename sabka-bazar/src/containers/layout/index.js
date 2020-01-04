import Layout from '../../components/layout';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    cartProducts: state.plp.cartProducts
});

export default connect(mapStateToProps, {})(Layout);