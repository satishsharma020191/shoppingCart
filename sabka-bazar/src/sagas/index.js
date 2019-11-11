import {call, put, takeEvery} from "redux-saga/effects";

import { receivedBannerData, receivedCategoriesData } from "../actions";
import { REQUEST_BANNER_DATA, REQUEST_CATEGORIES_DATA } from "../constants";
import { fetchBannerData, fetchCategoriesData } from '../Api';


function *getBannerData(){
    try{    
        const data = yield call(fetchBannerData);
        console.log('saga called banner', data);
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


export default function* mySaga(){
    yield takeEvery(REQUEST_BANNER_DATA, getBannerData);
    yield takeEvery(REQUEST_CATEGORIES_DATA, getCategoriesData);
}