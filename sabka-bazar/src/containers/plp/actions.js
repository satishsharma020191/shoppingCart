import { 
    REQUEST_PRODUCTS_DATA,
    RECEIVED_PRODUCTS_DATA,
    FILTER_PRODUCTS_DATA,
} from "./constants";

// export const requestBannerData = () => ({type: REQUEST_BANNER_DATA});
// export const requestCategoriesData = () => ({type: REQUEST_CATEGORIES_DATA});
// export const receivedBannerData = data => ({type: RECEIVED_BANNER_DATA, payload: data});
// export const receivedCategoriesData = data => ({type: RECEIVED_CATEGORIES_DATA, payload: data});
export const receivedProductsData = data => ({type: RECEIVED_PRODUCTS_DATA, payload: data});

export const filterProductsData = data => ({type: FILTER_PRODUCTS_DATA, payload: data});
export const requestProductsData = (cid) =>{
        console.log('printing cid action plp', cid);
        return {type: REQUEST_PRODUCTS_DATA, payload: cid}
    };