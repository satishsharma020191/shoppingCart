import { RECEIVED_PRODUCTS_DATA, FILTER_PRODUCTS_DATA } from "./constants";

export default (state = {}, action) => {
    switch(action.type) {    
        case RECEIVED_PRODUCTS_DATA:

            return state = {...state, products: action.payload}
        
        case FILTER_PRODUCTS_DATA:    
            
                let catID = state.categories && state.categories.filter((d)=>{
                    return d.key == action.payload;
                })[0].id;
                
                console.log('printing state reducer plp', state);
                console.log('printing catid reducer plp',catID);
            
                let filteredProducts = state.products && state.products.filter((d)=>{
                    return d.category == catID;
                });

                console.log('filtered product called reducer plp', filteredProducts);
               
             return state = {...state, products: filteredProducts};   
        default:    
            return state;
    }
} 