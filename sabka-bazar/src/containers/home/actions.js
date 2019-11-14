import { REQUEST_BANNER_DATA, 
    RECEIVED_BANNER_DATA, 
    REQUEST_CATEGORIES_DATA, 
    RECEIVED_CATEGORIES_DATA,
    REQUEST_PRODUCTS_DATA,
    RECEIVED_PRODUCTS_DATA,
    FILTER_PRODUCTS_DATA,
} from "../home/constants";

export const requestBannerData = () => ({type: REQUEST_BANNER_DATA});
export const requestCategoriesData = () => ({type: REQUEST_CATEGORIES_DATA});
export const requestProductsData = (cid) => ({type: REQUEST_PRODUCTS_DATA, payload: cid});

export const receivedBannerData = data => ({type: RECEIVED_BANNER_DATA, payload: data});
export const receivedCategoriesData = data => ({type: RECEIVED_CATEGORIES_DATA, payload: data});
export const receivedProductsData = data => ({type: RECEIVED_PRODUCTS_DATA, payload: data});
export const filterProductsData = data => ({type: FILTER_PRODUCTS_DATA, payload: data});
