import { call, put, takeEvery } from "redux-saga/effects";

import { receivedProductsData, receivedAddToCart } from "./actions";
import { receivedCategoriesData } from "../home/actions";
import { REQUEST_PRODUCTS_DATA, REQUEST_ADD_TO_CART } from "./constants";
import { fetchProductsData, postAddtoCartData } from './api';
import { fetchCategoriesData } from '../home/api';

function* getProductsData(action) {
    let catData = "";
    try {
        const prodData = yield call(fetchProductsData);

        // getting category id
        if (!action.payload.categories) {
            catData = yield call(fetchCategoriesData);
            yield put(receivedCategoriesData(catData));
        }

        if (action.payload.cid !== 'all') {
            let categories = action.payload.categories ? action.payload.categories : catData;
            let catID = categories && categories.filter((d) => {
                return d.key === action.payload.cid;
            })[0].id;

            let filteredProducts = prodData && prodData.filter((d) => {
                return d.category === catID;
            });
            yield put(receivedProductsData(filteredProducts));
        } else {
            yield put(receivedProductsData(prodData));
        }
    } catch (e) {
        console.log(e);
    }
}

function* postAddtoCart(action) {
    const response = yield call(postAddtoCartData, action.payload);
    if (response.response === 'Success') {
        yield put(receivedAddToCart(action.payload));
    }
}


export function* plpSaga() {
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
    yield takeEvery(REQUEST_ADD_TO_CART, postAddtoCart);
}

