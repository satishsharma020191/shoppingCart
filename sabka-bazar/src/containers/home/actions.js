import {
    REQUEST_BANNER_DATA,
    RECEIVED_BANNER_DATA,
    REQUEST_CATEGORIES_DATA,
    RECEIVED_CATEGORIES_DATA,
    GET_CATEGORY_ID_BY_KEY,
} from "./constants";

export const requestBannerData = () => ({ type: REQUEST_BANNER_DATA });
export const requestCategoriesData = () => ({ type: REQUEST_CATEGORIES_DATA });

export const receivedBannerData = data => ({ type: RECEIVED_BANNER_DATA, payload: data });
export const receivedCategoriesData = data => ({ type: RECEIVED_CATEGORIES_DATA, payload: data });

export const getCategoryIdbyKey = data => ({ type: GET_CATEGORY_ID_BY_KEY, payload: data });
