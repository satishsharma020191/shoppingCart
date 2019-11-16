import { RECEIVED_PRODUCTS_DATA, RECEIVED_ADD_TO_CART, REQUEST_ADD_PRODUCT, REQUEST_MINUS_PRODUCT} from "./constants";

export default (state = {}, action) => {
    switch(action.type) {    
        case RECEIVED_PRODUCTS_DATA:
            return state = {...state, products: action.payload}
        
        case RECEIVED_ADD_TO_CART:
            let cartProds = [];
            if(state.cartProducts){
                cartProds = [...state.cartProducts];
            }
            cartProds.push(action.payload);
            return state = {...state, cartProducts: cartProds}
        
        case REQUEST_ADD_PRODUCT:
        let addCartProducts = [];
        if(state.cartProducts){
            addCartProducts = [...state.cartProducts];
        }
        addCartProducts.push(action.payload);
        return state = {...state, cartProducts: addCartProducts}
        
        case REQUEST_MINUS_PRODUCT:
        let minusCartProducts = [];
        let indexToRemove = null;
        if(state.cartProducts){
            minusCartProducts = [...state.cartProducts];
        }
        
        minusCartProducts.map((obj, i)=>{
                if(obj.id == action.payload.id){
                    indexToRemove = i;
                }
        });

        delete minusCartProducts[indexToRemove];
        minusCartProducts = minusCartProducts.filter(value => Object.keys(value).length !== 0);
        return state = {...state, cartProducts: minusCartProducts}
        
        default:    
            return state;
    }
} 