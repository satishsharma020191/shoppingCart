import {
    REQUEST_PRODUCTS_DATA,
    RECEIVED_PRODUCTS_DATA,
    REQUEST_ADD_TO_CART,
    RECEIVED_ADD_TO_CART,
} from "./constants";

export const receivedProductsData = data => ({ type: RECEIVED_PRODUCTS_DATA, payload: data });

export const requestProductsData = (cid) => {
    return { type: REQUEST_PRODUCTS_DATA, payload: cid }
};

export const requestaddToCart = pid => ({ type: REQUEST_ADD_TO_CART, payload: pid });

export const receivedAddToCart = data => ({ type: RECEIVED_ADD_TO_CART, payload: data });
