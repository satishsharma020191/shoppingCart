import {RECEIVED_BANNER_DATA, RECEIVED_CATEGORIES_DATA, GET_CATEGORY_ID_BY_KEY} from "./constants";

export default (state = {}, action) => {
    switch(action.type) {
        case RECEIVED_BANNER_DATA:
            return state = {...state, banners: action.payload}
            
        case RECEIVED_CATEGORIES_DATA:
            return state = {...state, categories: action.payload}
        
        // case RECEIVED_PRODUCTS_DATA:

        //     return state = {...state, products: action.payload}
        
        // case FILTER_PRODUCTS_DATA:    
        //         let catID = state.categories && state.categories.filter((d)=>{
        //             return d.key == action.payload;
        //         })[0].id;

        //        let filteredProducts = state.products && state.products.filter((d)=>{
        //             return d.category == catID;
        //         });
               
        //      return state = {...state, products: filteredProducts};   
        default:    
            return state;
    }
} 