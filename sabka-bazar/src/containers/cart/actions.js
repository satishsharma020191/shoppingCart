import {
    REQUEST_ADD_PRODUCT,
    REQUEST_MINUS_PRODUCT,
} from "./constants";

export const requestAddProduct = data => ({ type: REQUEST_ADD_PRODUCT, payload: data });

export const requestMinusProduct = data => ({ type: REQUEST_MINUS_PRODUCT, payload: data });