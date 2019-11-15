import {RECEIVED_BANNER_DATA, RECEIVED_CATEGORIES_DATA, GET_CATEGORY_ID_BY_KEY} from "./constants";

export default (state = {}, action) => {
    switch(action.type) {
        case RECEIVED_BANNER_DATA:
            return state = {...state, banners: action.payload}
            
        case RECEIVED_CATEGORIES_DATA:
            return state = {...state, categories: action.payload}
        
        default:    
            return state;
    }
} 