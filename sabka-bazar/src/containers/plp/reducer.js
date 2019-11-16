import { RECEIVED_PRODUCTS_DATA, RECEIVED_ADD_TO_CART } from "./constants";

export default (state = {}, action) => {
    switch(action.type) {    
        case RECEIVED_PRODUCTS_DATA:
            return state = {...state, products: action.payload}
        
        case RECEIVED_ADD_TO_CART:
            console.log('received add to cart reducer', action.payload);
            let cartProducts = [];
            if(state.cartProducts){
             cartProducts = state.cartProducts;
            }
            cartProducts.push(action.payload);
            return state = {...state, cartProducts: cartProducts}
            
        default:    
            return state;
    }
} 