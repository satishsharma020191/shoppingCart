import {call, put, takeEvery} from "redux-saga/effects";

import { receivedProductsData, filterProductsData } from "./actions";
import { receivedCategoriesData } from "../home/actions";
import { REQUEST_PRODUCTS_DATA } from "./constants";
import { fetchProductsData } from './api';
import { fetchCategoriesData } from '../home/api';

function *getProductsData(action){
        let catData = "";
        console.log('getProduct Data plp saga', action);
    try{
        const data = yield call(fetchProductsData);
        console.log('product data plp saga', data);
        yield put(receivedProductsData(data));

        if(!action.payload.categories){
            catData = yield call(fetchCategoriesData);
            yield put(receivedCategoriesData(catData));
        }

        
        let categories = action.payload.categories ? action.payload.categories : catData;

        console.log('printing PLP SAGA category data', categories);
        let catID = categories && categories.filter((d)=>{
            return d.key == action.payload.cid;
        })[0].id;
        console.log('plp saga category data ID', catID);

        if(action.payload.cid && action.payload.cid!='all'){
            yield put(filterProductsData(catID));
        }
    }catch(e){
        console.log(e);
    }
}


export function* plpSaga(){
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}

