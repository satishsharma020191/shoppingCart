import {call, put, takeEvery} from "redux-saga/effects";

import { receivedBannerData, receivedCategoriesData } from "./actions";
import { REQUEST_BANNER_DATA, REQUEST_CATEGORIES_DATA, REQUEST_PRODUCTS_DATA } from "./constants";
import { fetchBannerData, fetchCategoriesData, fetchProductsData } from './api';


function *getBannerData(){
    try{    
        const data = yield call(fetchBannerData);
        yield put(receivedBannerData(data));
    } catch (e){
        console.log(e);
    }
}

function *getCategoriesData(){
    try{
        const data = yield call(fetchCategoriesData);
        yield put(receivedCategoriesData(data));
    }catch(e){
        console.log(e);
    }
}

export function* homeSaga(){
    yield takeEvery(REQUEST_BANNER_DATA, getBannerData);
    yield takeEvery(REQUEST_CATEGORIES_DATA, getCategoriesData);
    // yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}

