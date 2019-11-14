import {call, put, takeEvery} from "redux-saga/effects";

import { receivedBannerData, receivedCategoriesData, receivedProductsData, filterProductsData } from "./actions";
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

function *getProductsData(action){
    try{
        const data = yield call(fetchProductsData);
        yield put(receivedProductsData(data));

        if(!action.payload.categories){
            const data = yield call(fetchCategoriesData);
            yield put(receivedCategoriesData(data));
        }

        if(action.payload.cid && action.payload.cid!='all'){
            yield put(filterProductsData(action.payload.cid));
        }
    }catch(e){
        console.log(e);
    }
}


export default function* mySaga(){
    yield takeEvery(REQUEST_BANNER_DATA, getBannerData);
    yield takeEvery(REQUEST_CATEGORIES_DATA, getCategoriesData);
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}